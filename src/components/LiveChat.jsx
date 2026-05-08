import React, { useState, useRef, useEffect } from 'react';
import './LiveChat.css';

const SYSTEM_PROMPT = `You are a discreet concierge assistant for Kingz BDSM Community — a private, members-only BDSM club. 
Your role is to answer questions about membership, facilities, dungeon reservations, and the community in a professional, welcoming, and non-judgmental tone.
Keep answers concise and helpful. Protect member privacy. Never share personal details.
If asked about pricing or reservations, guide users to fill out the membership form or contact the admin.`;

function Message({ msg }) {
  return (
    <div className={`msg ${msg.role}`}>
      {msg.role === 'assistant' && <span className="msg-avatar">L</span>}
      <div className="msg-bubble">
        <p>{msg.content}</p>
        <span className="msg-time">{msg.time}</span>
      </div>
    </div>
  );
}

function now() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Kingz BDSM Community. How can I assist you today? All conversations are completely discreet.', time: now() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text, time: now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: history,
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'Sorry, I could not process your request.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply, time: now() }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection issue. Please try again shortly.', time: now() }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div className="chat-page">
      <div className="chat-hero">
        <div className="container">
          <span className="chip">AI Concierge</span>
          <h1 className="chat-title">LIVE<br /><span>CHAT</span></h1>
          <p className="chat-sub">Ask anything — discreet, instant, confidential.</p>
        </div>
      </div>

      <div className="container">
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">L</div>
            <div>
              <p className="chat-agent-name">Kingz Concierge</p>
              <p className="chat-agent-status"><span className="status-dot" /> Online now</p>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => <Message key={i} msg={msg} />)}
            {loading && (
              <div className="msg assistant">
                <span className="msg-avatar">L</span>
                <div className="msg-bubble typing"><span /><span /><span /></div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <textarea
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey} placeholder="Type a message..." rows={1}
            />
            <button className="send-btn" onClick={send} disabled={loading || !input.trim()}>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}
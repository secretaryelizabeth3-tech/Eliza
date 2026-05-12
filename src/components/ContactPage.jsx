import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css';

const EJ_SERVICE  = 'service_f99srdkD';
const EJ_TEMPLATE = 'template_p3xgpuh';
const EJ_PUBLIC   = 'n7Q85aSd-8N2ECJvP';
const ADMIN_EMAIL = 'secretaryelizabeth3@gmail.com';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('sending');
    try {
      await emailjs.send(EJ_SERVICE, EJ_TEMPLATE, {
        to_email:   ADMIN_EMAIL,
        form_type:  'Contact Form',
        first_name: form.firstName,
        last_name:  form.lastName || 'Not provided',
        from_email: form.email,
        message:    form.message,
        reply_to:   form.email,
      }, EJ_PUBLIC);
      setStatus('success');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="contact-page">
      <div className="container">
        <div className="form-success">
          <span className="success-icon">✦</span>
          <h3>Message Sent</h3>
          <p>Thanks for submitting! We will get back to you shortly.</p>
          <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Send Another</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <span className="chip">Get In Touch</span>
          <h1 className="page-title">CONTACT<br /><span>US</span></h1>
          <p className="page-sub">Contact us to turn your dream into a reality.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">🔒</span>
              <h4>Fully Discreet</h4>
              <p>Your identity and inquiry are completely confidential. We never share member information.</p>
            </div>
            <div className="info-card">
              <span className="info-icon">◈</span>
              <h4>Dungeon Reservations</h4>
              <p>Want to book a specific room? Use our Dungeon Reservation page for session booking.</p>
            </div>
            <div className="info-card">
              <span className="info-icon">✦</span>
              <h4>VIP Membership</h4>
              <p>Interested in joining? Fill out the membership form for a full application.</p>
            </div>
          </div>

          <div className="form-card">
            <div className="field-row">
              <div className="field">
                <label>First Name *</label>
                <input type="text" placeholder="First name" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" placeholder="Last name" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="field">
              <label>Message *</label>
              <textarea rows={5} placeholder="Type your message here..." value={form.message} onChange={e => set('message', e.target.value)} />
            </div>
            {status === 'error' && <p className="form-error">First name, email and message are required.</p>}
            <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
            <p className="form-note">🔒 Messages are delivered directly to secretaryelizabeth3@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './DungeonReservation.css';

const EJ_SERVICE  = 'service_f99srdk';
const EJ_TEMPLATE = 'template_p3xgpuh';
const EJ_PUBLIC   = 'n7Q85aSd-8N2ECJvP';
const ADMIN_EMAIL = 'secretaryelizabeth3@gmail.com';

const LOCATIONS = [
  'DC / Washington D.C.',
  'Northern Virginia',
  'Maryland',
  'New York',
  'Los Angeles',
  'Other / Contact Us',
];

export default function DungeonReservation() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', date: '', location: '', groupSize: '' });
  const [status, setStatus] = useState('idle');
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.date) { setStatus('error'); return; }
    setStatus('sending');
    try {
      await emailjs.send(EJ_SERVICE, EJ_TEMPLATE, {
        to_email:   ADMIN_EMAIL,
        form_type:  'Dungeon Reservation',
        full_name:  form.fullName,
        from_email: form.email,
        phone:      form.phone || 'Not provided',
        date:       form.date,
        location:   form.location || 'Not specified',
        group_size: form.groupSize || 'Not specified',
        reply_to:   form.email,
      }, EJ_PUBLIC);
      setStatus('success');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="reservation-page">
      <div className="container">
        <div className="form-success">
          <span className="success-icon">◈</span>
          <h3>Session Booked</h3>
          <p>Thanks for booking a session with us. We will get back to you on availability as well as payment information.</p>
          <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Make Another Booking</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="reservation-page">
      <div className="page-hero">
        <div className="container">
          <span className="chip">Dungeon Reservation</span>
          <h1 className="page-title">BOOK A<br /><span>SESSION</span></h1>
          <p className="page-sub">We'd love to see you and your partner at our facility.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="form-card">
          <div className="field-row">
            <div className="field">
              <label>Full Name *</label>
              <input type="text" placeholder="Your full name" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 000 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label>Select a Date *</label>
            <input type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => set('date', e.target.value)} />
          </div>
          <div className="field">
            <label>Preferred Dungeon Location</label>
            <div className="chip-group">
              {LOCATIONS.map(loc => (
                <button key={loc} type="button" className={`chip-btn ${form.location === loc ? 'active' : ''}`} onClick={() => set('location', loc)}>{loc}</button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>How Many Will You Be?</label>
            <div className="size-row">
              {['1', '2', '3', '4', '5+'].map(n => (
                <button key={n} type="button" className={`size-btn ${form.groupSize === n ? 'active' : ''}`} onClick={() => set('groupSize', n)}>{n}</button>
              ))}
            </div>
          </div>
          {status === 'error' && <p className="form-error">Name, email and date are required.</p>}
          <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Booking...' : 'Book Dungeon Session'}
          </button>
          <p className="form-note">🔒 We will contact you discreetly on availability and payment.</p>
        </div>
      </div>
    </div>
  );
}
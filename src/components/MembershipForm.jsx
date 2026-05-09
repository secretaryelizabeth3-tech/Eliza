import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './MembershipForm.css';

// ── EmailJS config ──────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com and create a free account
// 2. Add a service (Gmail) and connect secretaryelizabeth3@gmail.com
// 3. Create a template — make sure it uses the variables below
// 4. Replace the three placeholders below with your real IDs
const EJ_SERVICE  = 'service_f99srdk';
const EJ_TEMPLATE = 'template_p3xgpuh';
const EJ_PUBLIC   = 'n7Q85aSd-8N2ECJvP';
const ADMIN_EMAIL = 'secretaryelizabeth3@gmail.com';
// ───────────────────────────────────────────────────────────────────────────

const DISCOVERIES = [
  'Life-Changing Programmes',
  'Impact Stories',
  'Advocacy Updates',
  'Exclusive Events',
  'Community Impact',
];

export default function MembershipForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState('idle');
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.firstName || !form.email) { setStatus('error'); return; }
    setStatus('sending');
    try {
      await emailjs.send(EJ_SERVICE, EJ_TEMPLATE, {
        to_email:   ADMIN_EMAIL,
        form_type:  'VIP Membership Application',
        first_name: form.firstName,
        last_name:  form.lastName,
        from_email: form.email,
        phone:      form.phone || 'Not provided',
        subject:    form.subject || 'No subject',
        message:    form.message || 'No message',
        reply_to:   form.email,
      }, EJ_PUBLIC);
      setStatus('success');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="membership-page">
      <div className="container">
        <div className="form-success">
          <span className="success-icon">✦</span>
          <h3>Application Received</h3>
          <p>Thanks for submitting! We'll review your details and reach out to you discreetly.</p>
          <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Submit Another</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="membership-page">
      <div className="page-hero">
        <div className="container">
          <span className="chip">VIP Membership</span>
          <h1 className="page-title">JOIN THE<br /><span>COMMUNITY</span></h1>
          <p className="page-sub">Please fill out the form to join Kingz BDSM — Lifetime Membership Request.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="membership-layout">
          <div className="discover-panel">
            <p className="discover-heading">What You'll Discover</p>
            <ul className="discover-list">
              {DISCOVERIES.map(d => (
                <li key={d}><span className="discover-dot">+</span><span>{d}</span></li>
              ))}
            </ul>
            <div className="discover-note">
              <p>Ready to join us in making a difference? Fill out the simple form and stay connected with our journey. Your membership is an act of solidarity with BDSM LGBTQ+ individuals everywhere.</p>
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
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 000 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>
            <div className="field">
              <label>Subject</label>
              <input type="text" placeholder="What is this regarding?" value={form.subject} onChange={e => set('subject', e.target.value)} />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows={5} placeholder="Leave us a message..." value={form.message} onChange={e => set('message', e.target.value)} />
            </div>
            {status === 'error' && <p className="form-error">First name and email are required.</p>}
            <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting...' : 'Submit Application'}
            </button>
            <p className="form-note">🔒 All submissions are encrypted and sent directly to our admin. Fully confidential.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
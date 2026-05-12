import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-inner">
          <img src="/logo.png" alt="The Kinks BDSM Community" className="footer-logo-img" />
          <span className="footer-logo-name">THE KINKS</span>
          <span className="footer-tagline">BDSM COMMUNITY</span>
          <p className="footer-copy">©2024 The Kinks BDSM Community. All Rights Reserved.</p>
          <p className="footer-lock">🔒 Identity protected. Always.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-inner">
          <span className="footer-logo">Kingz <span>BDSM</span></span>
          <span className="footer-tagline">Discreet Community</span>
          <p className="footer-copy">©2024 Kingz BDSM Discreet Community. All Rights Reserved.</p>
          <p className="footer-lock">🔒 Identity protected. Always.</p>
        </div>
      </div>
    </footer>
  );
}
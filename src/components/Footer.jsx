import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-logo">The KINGZ BDSM</span>
              <span className="footer-tagline">Discreet Community</span>
            </div>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#rooms">ClubHouse Rooms</a>
              <a href="#reservation">Dungeon Reservation</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <a href="#membership">VIP Membership</a>
            </nav>
            <a href="#reservation" className="btn btn-solid footer-btn">
              Book a Dungeon Reservation
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>©2026 by The KINGZ BDSM Discreet Community. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home',        label: 'Home' },
  { id: 'rooms',       label: 'ClubHouse Rooms' },
  { id: 'reservation', label: 'Dungeon Reservation' },
  { id: 'membership',  label: 'VIP Membership' },
  { id: 'contact',     label: 'Contact' },
  { id: 'about',       label: 'About' },
  { id: 'chat',        label: 'Live Chat' },
];

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => handleNav('home')}>
          <img src="/logo.png" alt="The Kinks BDSM Community" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">THE KINKS</span>
            <span className="logo-sub">BDSM COMMUNITY</span>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

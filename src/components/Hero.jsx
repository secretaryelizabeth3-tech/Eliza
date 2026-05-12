import React from 'react';
import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to</p>
        <h1 className="hero-title">
          The Kinks BDSM Community
          <br />
          {/* <span>Discreet Community</span> */}
        </h1>
        <div className="hero-divider" />
        <p className="hero-tagline">Where Desires Meet Discretion</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onNavigate('membership')}>Join The Community</button>
          <button className="btn btn-ghost" onClick={() => onNavigate('rooms')}>Explore Dungeons</button>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

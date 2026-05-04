import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to</p>
        <h1 className="hero-title">
          The KINGZ BDSM<br />
          <span>Discreet Community</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-tagline">Where Desires Meet Discretion</p>
        <div className="hero-actions">
          <a href="#membership" className="btn btn-solid">Join The Community</a>
          <a href="#dungeons" className="btn">Explore Dungeons</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

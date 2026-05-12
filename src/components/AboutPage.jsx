import React from 'react';
import './AboutPage.css';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <span className="chip">Our Story</span>
          <h1 className="about-title">ABOUT<br /><span>US</span></h1>
        </div>
      </div>

      <div className="container">
        <div className="about-content">

          <div className="about-block">
            <p className="about-label">Who We Are</p>
            <h2>The Most Discreet BDSM Community in the World</h2>
            <p>
              The Kinks BDSM Community Discreet Community is the most renowned and largest BDSM community
              in the world. We are a safe, inclusive, and judgment-free space for Dominants,
              Submissives, Switches, and all those who embrace BDSM as a lifestyle.
            </p>
            <p>
              BDSM is a lifestyle and we ought to be proud of who we truly are. This is where
              you belong, and we are happy to fulfill your dreams and bring out the best of you.
              It is a journey filled with thrilling adventures and ecstasy.
            </p>
          </div>

          <div className="about-values">
            {[
              { icon: '🔒', title: 'Discretion First', desc: 'Your identity is our top priority. Every member is fully protected and anonymous.' },
              { icon: '◈', title: 'State-of-the-art Facilities', desc: 'Modernized dungeon equipment curated for Dominants, Submissives, and Sterns.' },
              { icon: '✦', title: 'LGBTQ+ Inclusive', desc: 'We proudly support and welcome members of the BDSM LGBTQ+ community.' },
              { icon: '▦', title: 'Global Community', desc: 'Dungeon facilities spanning multiple cities across the world.' },
            ].map(v => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <p>Keep dreaming — we are here to bring it to reality.</p>
            <div className="about-cta-btns">
              <button className="btn btn-primary" onClick={() => onNavigate('membership')}>
                Join The Community
              </button>
              <button className="btn btn-ghost" onClick={() => onNavigate('reservation')}>
                Book a Dungeon
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './DungeonsIntro.css';

const spaces = [
  {
    id: '01', name: 'The Vault', tag: 'Bondage',
    desc: 'Soundproofed chamber fitted with premium restraint furniture. Full privacy. Climate controlled.',
    items: ["St. Andrew's Cross", 'Spanking Bench', 'Bondage Chair', 'Objectifier Bench', 'Saw Horse'],
  },
  {
    id: '02', name: 'The Arsenal', tag: 'Gear & Toys',
    desc: 'Every tool curated for safety and sensation. From beginner kits to extreme-level equipment.',
    items: ['Electro (PES, Zeus, Violet Wand)', 'Whips, Floggers, Crops', 'Chastity Devices', 'Milking Machine', 'Rope & Restraints'],
  },
  {
    id: '03', name: 'The Suite', tag: 'Play Space',
    desc: 'Discreet entrance. Free parking. Overnight accommodations available for extended sessions.',
    items: ['Soundproof Boiler Room', 'Medical Room (soon)', 'Bathroom & Shower', 'Cross-dressing Room', 'School Room'],
  },
];

export default function DungeonsIntro() {
  const [active, setActive] = useState(0);
  return (
    <section className="dungeons" id="dungeons">
      <div className="container">
        <div className="dungeons-header">
          <span className="chip">Our Spaces</span>
          <h2 className="dungeons-title">DUNGEONS</h2>
          <div className="divider" />
          <p className="dungeons-sub">Discover the Good Atmosphere of Kinky Activities</p>
          <p className="dungeons-copy">
            We have sophisticated club dungeon facilities in almost every city, to meet your desires
            and fulfill your fantasies. Our facilities are state of the art with modernized equipment
            for Dominants, Submissives and Sterns — crafted entirely for your pleasure.
          </p>
        </div>

        <div className="space-tabs">
          {spaces.map((s, i) => (
            <button key={s.id} className={`space-tab ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
              <span className="space-tab-num">{s.id}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        <div className="space-card" key={active}>
          <div className="space-card-header">
            <span className="chip">{spaces[active].tag}</span>
            <h3 className="space-card-name">{spaces[active].name}</h3>
            <p className="space-card-desc">{spaces[active].desc}</p>
          </div>
          <ul className="space-features">
            {spaces[active].items.map(item => (
              <li key={item}><span className="feat-bullet">+</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="quote-banner">
        <div className="container">
          <blockquote>
            <p>"You want to be free. You also want to be mine. You can't be both."</p>
            <cite>— Kingz BDSM</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
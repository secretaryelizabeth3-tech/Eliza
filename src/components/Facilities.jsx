import React from 'react';
import './Facilities.css';

const columns = [
  {
    title: 'Bondage Furniture',
    icon: '⛓',
    items: ['Spanking Bench', "St. Andrew's Cross", 'Saw Horse', 'Objectifier Bench', 'Bondage Chair', 'Exposer Bench', 'Bondage Table', 'Toilet Chair', 'Cage', 'CBT Pillory', 'Scent Training Box'],
  },
  {
    title: 'Toys & Gear',
    icon: '🔗',
    items: ['Gags & Blindfolds', 'Restraints by Scott Paul', 'Restraints (neoprene) by Mr. S', 'Nipple Clamps', 'Electro (PES, Zeus, Violet Wand)', 'Rope / Restraints', 'Sleepsacks (2 sizes)', 'Demask Hoods & Latex Armbinder', 'Gas Masks & Neoprene Hoods', 'Backdoor Toys (all levels)', 'Milking Machine', 'Whips, Floggers, Paddles, Crops, Canes', 'Needles + Butterfly Board', 'Sounds', 'Chastity Devices', "Kali's Teeth Bracelets", 'Cross-dressing Attire'],
  },
  {
    title: 'BDSM Play Space',
    icon: '🏛',
    items: ['Sound Proof Boiler Room', 'Cross-dressing Room (fully stocked)', 'Medical Room (coming soon)', 'Office / School Room', 'Bathroom with Shower', 'Overnight Slavery Accommodations', 'Convenient DC / Northern VA / MD location', 'Free Off-street Parking', 'Discreet Entrance'],
  },
];

export default function Facilities() {
  return (
    <section className="facilities" id="rooms">
      <div className="container">
        <div className="facilities-header">
          <p className="facilities-eyebrow">What We Offer</p>
          <h2 className="facilities-title">Our Dungeon Facilities</h2>
          <div className="section-divider" />
        </div>
        <div className="facilities-grid">
          {columns.map((col) => (
            <div className="facility-card" key={col.title}>
              <div className="facility-icon">{col.icon}</div>
              <h3 className="facility-name">{col.title}</h3>
              <div className="facility-line" />
              <ul className="facility-list">
                {col.items.map((item) => (
                  <li key={item}><span className="bullet">+</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

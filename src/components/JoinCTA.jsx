import React from 'react';
import './JoinCTA.css';

export default function JoinCTA({ onNavigate }) {
  return (
    <section className="join-cta">
      <div className="join-bg" />
      <div className="container">
        <div className="join-inner">
          <span className="chip">Exclusive Membership</span>
          <h2 className="join-title">
            WANT TO JOIN THE BEST, LARGEST,<br />
            AND MOST DISCREET BDSM<br />
            COMMUNITY IN THE WORLD?
          </h2>
          <div className="divider" />
          <p className="join-body">
            This is the most renowned and largest BDSM community in the world. BDSM is a lifestyle
            and we ought to be proud of who we truly are. This is where you belong and we are happy
            to fulfill your dreams and bring out the best of you. It is a journey filled with
            thrilling adventures and ecstasy. Keep dreaming — we are here to bring it to reality.
          </p>
          <div className="join-actions">
            <button className="btn btn-primary" onClick={() => onNavigate('membership')}>
              Membership Enquiries
            </button>
            <button className="btn btn-ghost" onClick={() => onNavigate('reservation')}>
              Book a Dungeon
            </button>
          </div>
          <div className="privacy-note">
            <p>🔒 Discreetness is our top priority. We are committed to protecting your identity while helping you setup a memorable kinky atmosphere.</p>
          </div>
          <div className="payment-section">
            <p className="payment-label">Accepted Payments</p>
            <div className="payment-methods">
              {['₿ Bitcoin', 'Zelle', 'Cash App', 'Venmo', 'PayPal'].map(p => (
                <div className="payment-pill" key={p}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

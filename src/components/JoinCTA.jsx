import React from 'react';
import './JoinCTA.css';

export default function JoinCTA() {
  return (
    <section className="join-cta" id="membership">
      <div className="join-bg" />
      <div className="container">
        <div className="join-inner">
          <p className="join-eyebrow">Exclusive Membership</p>
          <h2 className="join-title">
            Want to Join the Best, Largest, and Most Discreet<br />
            BDSM Community in the World?
          </h2>
          <div className="section-divider" />
          <p className="join-body">
            This is the most renowned and largest BDSM community in the world. BDSM is a lifestyle
            and we ought to be proud of who we truly are. This is where you belong and we are happy
            to fulfill your dreams and bring out the best of you. It is a journey filled with
            thrilling adventures and ecstasy. Keep dreaming — we are here to bring it to reality.
          </p>
          <div className="join-actions">
            <a href="#membership" className="btn btn-solid">Membership Enquiries</a>
            <a href="#reservation" className="btn">Book a Dungeon</a>
          </div>
          <div className="privacy-note">
            <p>🔒 Discreetness is our top priority. We are committed to protecting your identity while helping you set up a memorable, kinky atmosphere.</p>
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

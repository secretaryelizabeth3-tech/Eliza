import React from 'react';
import './DungeonsIntro.css';

export default function DungeonsIntro() {
  return (
    <section className="dungeons-intro" id="dungeons">
      <div className="container">
        <div className="intro-inner">
          <p className="intro-label">Our Spaces</p>
          <h2 className="intro-heading">DUNGEONS</h2>
          <div className="section-divider" />
          <h3 className="intro-sub">Discover the Good Atmosphere of Kinky Activities</h3>
          <p className="intro-body">
            We have sophisticated club dungeon facilities in almost every city, to meet your desires
            and fulfill your fantasies. Our facilities are state of the art with modernized equipment
            for Dominants, Submissives and Sterns — crafted entirely for your pleasure.
          </p>
          <p className="intro-body">
            Our security is top notch with our serene environment giving you the peak of your
            personal satisfaction.
          </p>
          <a href="#membership" className="btn btn-solid">Join The Lech BDSM</a>
        </div>
      </div>
      <div className="quote-banner">
        <div className="container">
          <blockquote>
            <p>"You want to be free. You also want to be mine. You can't be both."</p>
            <cite>— The Lech BDSM</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

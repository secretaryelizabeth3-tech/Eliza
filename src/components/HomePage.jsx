import React from 'react';
import Hero from './Hero';
import DungeonsIntro from './DungeonsIntro';
import Gallery from './Gallery';
import JoinCTA from './JoinCTA';

export default function HomePage({ onNavigate }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <DungeonsIntro />
      <Gallery onNavigate={onNavigate} />
      <JoinCTA onNavigate={onNavigate} />
    </div>
  );
}

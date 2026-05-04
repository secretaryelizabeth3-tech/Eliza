import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DungeonsIntro from './components/DungeonsIntro';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DungeonsIntro />
        <Facilities />
        <Gallery />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}

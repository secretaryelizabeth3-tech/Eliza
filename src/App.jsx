import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ClubHouseRooms from './components/ClubHouseRooms';
import DungeonReservation from './components/DungeonReservation';
import MembershipForm from './components/MembershipForm';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':        return <HomePage onNavigate={navigate} />;
      case 'rooms':       return <ClubHouseRooms onNavigate={navigate} />;
      case 'reservation': return <DungeonReservation />;
      case 'membership':  return <MembershipForm />;
      case 'contact':     return <ContactPage />;
      case 'about':       return <AboutPage onNavigate={navigate} />;
      case 'chat':        return <LiveChat />;
      default:            return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main>
        {renderPage()}
        {activePage === 'home' && <Footer />}
      </main>
    </>
  );
}

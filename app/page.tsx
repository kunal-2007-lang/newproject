import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Prizes from '../components/Prizes';
import SocialWelfare from '../components/SocialWelfare';
import EntryForm from '../components/EntryForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gray-50 selection:bg-orange-500 selection:text-white scroll-smooth">
      <Topbar />
      <Navbar />

      <Hero />
      <About />
      <HowItWorks />
      <Prizes />
      <SocialWelfare />
      <EntryForm />
      <Contact />

      <Footer />
    </main>
  );
}

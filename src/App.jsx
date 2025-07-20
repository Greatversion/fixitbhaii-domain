import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Marketplace from '@/components/landing/Marketplace';
import Features from '@/components/landing/Features';
import Vendors from '@/components/landing/Vendors';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#041a3b] via-indigo-900 to-purple-900">
      <Helmet>
        <title>FixItBhaii - On-Demand Electrical & Computer Repair Services</title>
        <meta name="description" content="Professional electrical and computer repair services with old appliances marketplace. Connect with nearby vendors and certified technicians for all your repair needs." />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <Services />
        <Marketplace />
        <Features />
        <Vendors />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
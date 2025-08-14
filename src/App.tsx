import React from 'react';
import { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const { user, loading } = useAuth();
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if current path is admin
  React.useEffect(() => {
    if (window.location.pathname === '/admin') {
      setShowAdmin(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#081172] mx-auto mb-4"></div>
          <p className="text-[#2a3b47]">Carregando...</p>
        </div>
      </div>
    );
  }

  // Admin area
  if (showAdmin) {
    if (!user) {
      return <AdminLogin onLogin={() => {}} />;
    }
    return <AdminDashboard />;
  }

  // Main website
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
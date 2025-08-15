import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent backdrop-blur-0 shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#081172]' : 'text-white'
            }`}>
              Matheus Engenheiro
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate('/admin')}
              className={`transition-colors font-medium text-xs ${
                isScrolled 
                  ? 'text-gray-400 hover:text-[#081172]' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Admin
            </button>
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-[#2a3b47] hover:text-[#081172]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-[#2a3b47] hover:text-[#081172]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-[#2a3b47] hover:text-[#081172]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-[#2a3b47] hover:text-[#081172]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-[#081172]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${
            isScrolled ? 'bg-white' : 'bg-[#081172]/95 backdrop-blur-sm'
          } border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  isScrolled 
                    ? 'text-[#2a3b47] hover:text-[#081172] hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  isScrolled 
                    ? 'text-[#2a3b47] hover:text-[#081172] hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  isScrolled 
                    ? 'text-[#2a3b47] hover:text-[#081172] hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  isScrolled 
                    ? 'text-[#2a3b47] hover:text-[#081172] hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
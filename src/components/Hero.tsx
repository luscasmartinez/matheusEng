import React from 'react';
import { ArrowRight, Shield, FileText, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081172] via-[#081172]/90 to-[#2a3b47]">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluções em Engenharia com{' '}
              <span className="text-yellow-400">Excelência</span> e{' '}
              <span className="text-yellow-400">Conformidade</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Consultoria especializada em PMOC, NRs, AVCB e projetos técnicos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-400 text-[#081172] px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicite um Orçamento
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/10"
              >
                Conheça os Serviços
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-yellow-400" />
                <span>CREA-RS 271119</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-yellow-400" />
                <span>Laudos Técnicos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>Conformidade Legal</span>
              </div>
            </div>
          </div>

          {/* Right side with image */}
          <div className="hidden lg:flex items-end justify-end h-full">
            <div className="relative w-full h-full flex items-end">
              <div className="relative w-full">
                <div className="absolute -bottom-20 right-0 w-full max-w-xl">
                  <img 
                    src="https://i.imgur.com/fmVbinK.png" 
                    alt="Ilustração de engenharia" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
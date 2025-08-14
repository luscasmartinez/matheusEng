import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081172] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Matheus Engenheiro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialista em laudo técnico com foco em segurança, 
              conformidade legal e excelência técnica. Atendimento personalizado 
              e laudos com embasamento técnico sólido.
            </p>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-yellow-400" />
                <span className="text-sm">CREA: 123456789-SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-yellow-400" />
                <span className="text-sm">10+ Anos</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:matheus@engenheiro.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">PMOC</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">NR 11/12/13</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">AVCB</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Projeto 3D</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Playgrounds</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Reclassificação</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>(55) 98121-4094</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>matheus@engenheiro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Alegrete - RS</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Horário de Atendimento</h5>
              <p className="text-sm text-gray-300">
                Segunda à Sexta: 8:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Matheus Engenheiro. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <span>CREA-RS: 271119</span>
              <span>|</span>
              <span>Responsável Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
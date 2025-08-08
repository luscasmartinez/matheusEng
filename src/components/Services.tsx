import React from 'react';
import { 
  Settings, 
  Shield, 
  Flame, 
  Box, 
  Users, 
  FileCheck,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings size={40} />,
      title: 'PMOC',
      description: 'Plano de Manutenção, Operação e Controle de sistemas de climatização, garantindo eficiência energética e qualidade do ar.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield size={40} />,
      title: 'NR 11/12/13',
      description: 'Segurança em máquinas, transportadores e vasos de pressão, assegurando conformidade com normas regulamentadoras.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Flame size={40} />,
      title: 'AVCB',
      description: 'Auto de Vistoria do Corpo de Bombeiros, documentação essencial para funcionamento legal e seguro de edificações.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Box size={40} />,
      title: 'Projeto 3D',
      description: 'Modelagem tridimensional para espaços industriais e comerciais, facilitando visualização e planejamento de projetos.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users size={40} />,
      title: 'Playgrounds',
      description: 'Projetos de áreas de lazer seguras seguindo NBR 16071, priorizando segurança e diversão para crianças.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Reclassificação de Risco',
      description: 'Adequação às normas vigentes através de análise técnica e reclassificação de riscos em ambientes industriais.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#fafaff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081172] mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-[#2a3b47] max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em engenharia com foco em segurança, 
            conformidade legal e excelência técnica para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#081172] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#2a3b47] leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-[#081172] font-semibold hover:text-yellow-600 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Saiba mais
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 bg-[#081172] hover:bg-[#081172]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicite uma Consultoria
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useState } from 'react';
import {
  Settings,
  Shield,
  Flame,
  Box,
  Users,
  FileCheck,
  ArrowRight,
  X
} from 'lucide-react';

type Service = {
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  longDescription: string;
  color: string;
};

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Impede scroll da página quando modal está aberto
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Restaura scroll da página
  };

  const services = [
    {
      icon: <Settings size={40} />,
      title: 'PMOC',
      shortDescription: 'Plano de Manutenção, Operação e Controle de sistemas de climatização, garantindo eficiência energética e qualidade do ar.',
      longDescription: 'O PMOC (Plano de Manutenção, Operação e Controle) é obrigatório para todos os sistemas de climatização de acordo com a Lei Federal 13.589/2018. Nosso serviço inclui: elaboração do plano completo, execução das manutenções preventivas e corretivas, limpeza de componentes, análise da qualidade do ar interior, emissão de relatórios técnicos e treinamento da equipe responsável. Garantimos conformidade com a legislação e melhoria da eficiência energética do sistema.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield size={40} />,
      title: 'NR 11',
      shortDescription: 'Segurança em operações com transportadores industriais e máquinas, garantindo conformidade com a Norma Regulamentadora 11.',
      longDescription: 'A NR 11 estabelece requisitos de segurança para operação de equipamentos como elevadores, guindastes, transportadores de materiais e máquinas em geral. Nossos serviços incluem: análise de risco, elaboração de procedimentos operacionais seguros, inspeção de equipamentos, treinamento de operadores, certificação de equipamentos e assessoria para regularização perante os órgãos fiscalizadores. Prevenimos acidentes e multas por não conformidade.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield size={40} />,
      title: 'NR 12',
      shortDescription: 'Segurança no trabalho em máquinas e equipamentos, atendendo todos os requisitos da Norma Regulamentadora 12.',
      longDescription: 'A NR 12 trata da segurança no trabalho em máquinas e equipamentos. Oferecemos: análise de risco detalhada, adequação de máquinas aos requisitos da norma (proteções, dispositivos de segurança, sistemas de emergência), elaboração de documentação técnica (manual, procedimentos, certificados), treinamento de operadores e manutenção, laudo técnico de conformidade e apoio em fiscalizações. Garantimos que seu parque de máquinas esteja em total conformidade.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield size={40} />,
      title: 'NR 13',
      shortDescription: 'Segurança na operação de vasos de pressão e caldeiras, conforme exigências da Norma Regulamentadora 13.',
      longDescription: 'A NR 13 regulamenta a segurança na operação de vasos de pressão, caldeiras e tubulações. Nossos serviços abrangem: elaboração de PRVC (Plano de Revisão e Verificação de Caldeiras/Vasos), inspeções periódicas, avaliação de integridade estrutural, cálculo de vida útil remanescente, emissão de ART (Anotação de Responsabilidade Técnica), treinamento de operadores e gestão completa da documentação exigida. Assegure a operação segura e legal de seus equipamentos.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Flame size={40} />,
      title: 'AVCB',
      shortDescription: 'Auto de Vistoria do Corpo de Bombeiros, documentação essencial para funcionamento legal e seguro de edificações.',
      longDescription: 'O AVCB (Auto de Vistoria do Corpo de Bombeiros) é documento obrigatório para funcionamento de estabelecimentos comerciais, industriais e de prestação de serviços. Nosso atendimento inclui: análise prévia do local, projeto técnico de prevenção contra incêndio, especificação e instalação de equipamentos (extintores, sprinklers, iluminação de emergência), treinamento de brigada de incêndio, acompanhamento na vistoria e emissão do documento. Garantimos aprovação junto ao Corpo de Bombeiros.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Box size={40} />,
      title: 'Projeto 3D',
      shortDescription: 'Modelagem tridimensional para espaços industriais e comerciais, facilitando visualização e planejamento de projetos.',
      longDescription: 'Nossos projetos em 3D permitem visualização realista de espaços industriais e comerciais antes da execução. Serviços incluem: modelagem BIM (Building Information Modeling), simulação de fluxos de produção, análise ergonômica, layout de máquinas e equipamentos, estudos de acessibilidade, renderização fotorealística e animações para apresentação. Facilitamos a tomada de decisão e evitamos retrabalhos na execução do projeto físico.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users size={40} />,
      title: 'Playground Infantil',
      shortDescription: 'Projetos de áreas de lazer seguras seguindo NBR 16071, priorizando segurança e diversão para crianças.',
      longDescription: 'Especializados em playgrounds seguros conforme NBR 16071, oferecemos: projeto técnico completo, especificação de brinquedos certificados, análise de impactos e quedas, seleção de pisos amortecentes (emborrachado, grama sintética), sinalização de segurança, laudo técnico de conformidade e manutenção preventiva. Criamos espaços lúdicos que combinam diversão e segurança máxima para crianças, adequados a escolas, condomínios e áreas públicas.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Reclassificação de Risco',
      shortDescription: 'Adequação às normas vigentes através de análise técnica e reclassificação de riscos em ambientes industriais.',
      longDescription: 'A reclassificação de risco é necessária quando há mudanças nos processos produtivos ou atualização de normas. Realizamos: análise detalhada dos processos, identificação de novos perigos, avaliação de exposição dos trabalhadores, classificação conforme grau de risco (1 a 4), elaboração de documentos técnicos (PPP, LTCAT), orientação para enquadramento no eSocial e assessoria em auditorias. Mantenha sua empresa sempre em conformidade com a legislação trabalhista e previdenciária.',
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
                  {service.shortDescription}
                </p>
                <button
                  onClick={() => openModal(service)}
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

      {/* Modal */}
      {modalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`h-2 bg-gradient-to-r ${selectedService.color}`}></div>
            <div className="p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>

              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${selectedService.color} text-white mb-6`}>
                {selectedService.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#081172] mb-4">
                {selectedService.title}
              </h3>
              <p className="text-[#2a3b47] leading-relaxed mb-6 whitespace-pre-line">
                {selectedService.longDescription}
              </p>
              <button
                onClick={() => window.open("https://wa.me/5555981214094?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento", "_blank")}
                className="inline-flex items-center gap-3 bg-[#081172] hover:bg-[#081172]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
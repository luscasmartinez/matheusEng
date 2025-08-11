import React from 'react';
import { 
  Award, 
  BookOpen, 
  Users, 
  CheckCircle,
  Star,
  Calendar 
} from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      title: 'CREA-RS 271119',
      description: 'Registro profissional ativo no Conselho Regional de Engenharia'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Formação Sólida',
      description: 'Graduação em Engenharia com especializações em segurança'
    },
    {
      icon: <Users size={24} />,
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos atuando em projetos de grande porte'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Conformidade Legal',
      description: 'Todos os laudos com embasamento técnico e legal'
    }
  ];

  const differentials = [
    'Atendimento personalizado para cada cliente',
    'Laudos técnicos com embasamento legal sólido',
    'Acompanhamento completo do projeto',
    'Prazos cumpridos rigorosamente',
    'Consultoria pós-entrega incluída',
    'Disponibilidade para emergências'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#081172] to-[#2a3b47] rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mx-auto mb-8">
                <Users size={48} className="text-yellow-400" />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Matheus Silva</h3>
                <p className="text-gray-300">Engenheiro Especialista</p>
                <p className="text-sm text-gray-400 mt-1">CREA: 123456789-SP</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Calendar size={16} />
                    <span className="text-2xl font-bold">2+</span>
                  </div>
                  <p className="text-sm text-gray-300">Anos de Experiência</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle size={16} />
                    <span className="text-2xl font-bold">12+</span>
                  </div>
                  <p className="text-sm text-gray-300">Projetos Concluídos</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star size={16} />
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <p className="text-sm text-gray-300">Satisfação Cliente</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Award size={16} />
                    <span className="text-2xl font-bold">Engenheiro Mecânico</span>
                  </div>
                  <p className="text-sm text-gray-300">Certificações</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#081172] mb-6">
              Sobre o Profissional
            </h2>
            
            <p className="text-lg text-[#2a3b47] mb-8 leading-relaxed">
              Com mais de uma década de experiência em engenharia, especializo-me em 
              soluções técnicas que garantem segurança, conformidade legal e eficiência 
              operacional para empresas de todos os portes.
            </p>

            <p className="text-[#2a3b47] mb-8 leading-relaxed">
              Minha abordagem combina conhecimento técnico aprofundado com atendimento 
              personalizado, garantindo que cada projeto atenda não apenas às normas 
              regulamentadoras, mas também às necessidades específicas de cada cliente.
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="text-[#081172] mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081172] mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-[#2a3b47]">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div>
              <h3 className="text-xl font-bold text-[#081172] mb-4">
                Diferenciais do Serviço:
              </h3>
              <div className="space-y-3">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-[#2a3b47]">{differential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
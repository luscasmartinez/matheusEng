import React, { useState } from 'react';
import { addQuoteRequest } from '../services/firebaseService';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  Clock 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'PMOC - Plano de Manutenção, Operação e Controle',
    'NR 11/12/13 - Segurança em Máquinas',
    'AVCB - Auto de Vistoria do Corpo de Bombeiros',
    'Projeto 3D - Modelagem Industrial/Comercial',
    'Playgrounds - Projetos de Áreas de Lazer',
    'Reclassificação de Risco',
    'Consultoria Geral',
    'Outro'

  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitForm = async () => {
      try {
        await addQuoteRequest(formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        }, 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Erro ao enviar solicitação. Tente novamente.');
      }
    };
    
    submitForm();
  };

  return (
    <section id="contact" className="py-20 bg-[#fafaff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081172] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#2a3b47] max-w-3xl mx-auto">
            Pronto para garantir a conformidade e segurança do seu negócio? 
            Entre em contato e solicite um orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#081172] mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[#081172] p-3 rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#081172]">Telefone</h4>
                  <p className="text-[#2a3b47]">(55) 98121-4094</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[#081172] p-3 rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#081172]">E-mail</h4>
                  <p className="text-[#2a3b47]">matheusdelimamartinez@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[#081172] p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#081172]">Localização</h4>
                  <p className="text-[#2a3b47]">Alegrete - RS</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[#081172] p-3 rounded-full">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#081172]">Horário</h4>
                  <p className="text-[#2a3b47]">Seg - Sex: 8:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#081172] to-[#2a3b47] rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Resposta Rápida Garantida</h4>
              <p className="mb-4">
                Retornamos seu contato em até 2 horas durante horário comercial.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span className="text-sm">Orçamento sem compromisso</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#081172] mb-6">
              Solicite um Orçamento
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-[#2a3b47]">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2a3b47] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2a3b47] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2a3b47] mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none transition-colors"
                      placeholder="(55) 98121-4094"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#2a3b47] mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2a3b47] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Descreva detalhes sobre seu projeto ou dúvidas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#081172] hover:bg-[#081172]/90 text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Enviar Mensagem
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { 
  LogOut, 
  FileText, 
  Settings, 
  Users,
  Plus,
  Eye,
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  Phone
} from 'lucide-react';
import { QuoteRequest, Service } from '../types';
import { 
  getQuoteRequests, 
  updateQuoteRequestStatus, 
  getServices, 
  addService, 
  updateService, 
  deleteService 
} from '../services/firebaseService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'quotes' | 'services'>('quotes');
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [quotesData, servicesData] = await Promise.all([
        getQuoteRequests(),
        getServices()
      ]);
      setQuoteRequests(quotesData);
      setServices(servicesData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleStatusUpdate = async (id: string, status: QuoteRequest['status']) => {
    try {
      await updateQuoteRequestStatus(id, status);
      setQuoteRequests(prev => 
        prev.map(quote => 
          quote.id === id ? { ...quote, status } : quote
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
      try {
        await deleteService(id);
        setServices(prev => prev.filter(service => service.id !== id));
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const getStatusColor = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'contacted': return 'Contatado';
      case 'completed': return 'Concluído';
      default: return status;
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#081172]">Painel Administrativo</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-[#2a3b47] hover:text-[#081172] transition-colors"
            >
              <LogOut size={20} />
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'quotes'
                ? 'bg-white text-[#081172] shadow-sm'
                : 'text-[#2a3b47] hover:text-[#081172]'
            }`}
          >
            <FileText size={20} className="inline mr-2" />
            Solicitações ({quoteRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'services'
                ? 'bg-white text-[#081172] shadow-sm'
                : 'text-[#2a3b47] hover:text-[#081172]'
            }`}
          >
            <Settings size={20} className="inline mr-2" />
            Serviços ({services.length})
          </button>
        </div>

        {/* Quote Requests Tab */}
        {activeTab === 'quotes' && (
          <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-[#081172]">Solicitações de Orçamento</h2>
              </div>
              
              {quoteRequests.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>Nenhuma solicitação encontrada</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cliente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Serviço
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {quoteRequests.map((quote) => (
                        <tr key={quote.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{quote.name}</div>
                              <div className="text-sm text-gray-500">{quote.email}</div>
                              <div className="text-sm text-gray-500">{quote.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs truncate">
                              {quote.service}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quote.createdAt.toLocaleDateString('pt-BR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={quote.status}
                              onChange={(e) => handleStatusUpdate(quote.id!, e.target.value as QuoteRequest['status'])}
                              className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${getStatusColor(quote.status)}`}
                            >
                              <option value="pending">Pendente</option>
                              <option value="contacted">Contatado</option>
                              <option value="completed">Concluído</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex gap-2">
                              <button
                                onClick={() => setSelectedQuote(quote)}
                                className="text-[#081172] hover:text-[#081172]/80"
                              >
                                <Eye size={16} />
                              </button>
                              <a
                                href={`https://wa.me/55${quote.phone.replace(/\D/g, '')}?text=Olá ${quote.name}, recebemos sua solicitação de orçamento para ${quote.service}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800"
                              >
                                <Phone size={16} />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#081172]">Gerenciar Serviços</h2>
              <button
                onClick={() => {
                  setEditingService(null);
                  setShowServiceModal(true);
                }}
                className="bg-[#081172] hover:bg-[#081172]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Adicionar Serviço
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className={`h-2 bg-gradient-to-r ${service.color} rounded-t-lg -mx-6 -mt-6 mb-4`}></div>
                  <h3 className="text-lg font-semibold text-[#081172] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#2a3b47] mb-4 line-clamp-3">{service.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {service.createdAt.toLocaleDateString('pt-BR')}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingService(service);
                          setShowServiceModal(true);
                        }}
                        className="text-[#081172] hover:text-[#081172]/80"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id!)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#081172]">Detalhes da Solicitação</h3>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <p className="text-[#2a3b47]">{selectedQuote.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-[#2a3b47]">{selectedQuote.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <p className="text-[#2a3b47]">{selectedQuote.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Serviço</label>
                  <p className="text-[#2a3b47]">{selectedQuote.service}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <p className="text-[#2a3b47] whitespace-pre-wrap">{selectedQuote.message || 'Nenhuma mensagem adicional'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                  <p className="text-[#2a3b47]">{selectedQuote.createdAt.toLocaleString('pt-BR')}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedQuote.status)}`}>
                    {getStatusText(selectedQuote.status)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {showServiceModal && (
        <ServiceModal
          service={editingService}
          onClose={() => {
            setShowServiceModal(false);
            setEditingService(null);
          }}
          onSave={(serviceData) => {
            if (editingService) {
              updateService(editingService.id!, serviceData).then(() => {
                loadData();
                setShowServiceModal(false);
                setEditingService(null);
              });
            } else {
              addService(serviceData).then(() => {
                loadData();
                setShowServiceModal(false);
              });
            }
          }}
        />
      )}
    </div>
  );
};

// Service Modal Component
interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSave: (serviceData: Omit<Service, 'id' | 'createdAt'>) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: service?.title || '',
    shortDescription: service?.shortDescription || '',
    longDescription: service?.longDescription || '',
    color: service?.color || 'from-blue-500 to-blue-600',
    icon: service?.icon || 'Settings'
  });

  const colorOptions = [
    { value: 'from-blue-500 to-blue-600', label: 'Azul' },
    { value: 'from-green-500 to-green-600', label: 'Verde' },
    { value: 'from-red-500 to-red-600', label: 'Vermelho' },
    { value: 'from-purple-500 to-purple-600', label: 'Roxo' },
    { value: 'from-orange-500 to-orange-600', label: 'Laranja' },
    { value: 'from-teal-500 to-teal-600', label: 'Azul-verde' },
    { value: 'from-yellow-500 to-yellow-600', label: 'Amarelo' },
    { value: 'from-pink-500 to-pink-600', label: 'Rosa' }
  ];

  const iconOptions = [
    'Settings', 'Shield', 'Flame', 'Box', 'Users', 'FileCheck', 'Wrench', 'Building'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#081172]">
              {service ? 'Editar Serviço' : 'Adicionar Serviço'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Curta</label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Completa</label>
              <textarea
                value={formData.longDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, longDescription: e.target.value }))}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none resize-none"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cor</label>
                <select
                  value={formData.color}
                  onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none"
                >
                  {colorOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ícone</label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#081172] focus:border-transparent outline-none"
                >
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-[#081172] text-white rounded-lg hover:bg-[#081172]/90 transition-colors"
              >
                {service ? 'Atualizar' : 'Adicionar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
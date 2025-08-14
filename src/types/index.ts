export interface QuoteRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
  status: 'pending' | 'contacted' | 'completed';
}

export interface Service {
  id?: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  color: string;
  icon: string;
  createdAt: Date;
}

export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'user';
}
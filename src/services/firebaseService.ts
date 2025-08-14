import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { QuoteRequest, Service } from '../types';

// Quote Requests
export const addQuoteRequest = async (quoteData: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'quoteRequests'), {
      ...quoteData,
      createdAt: Timestamp.now(),
      status: 'pending'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding quote request:', error);
    throw error;
  }
};

export const getQuoteRequests = async (): Promise<QuoteRequest[]> => {
  try {
    const q = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate()
    })) as QuoteRequest[];
  } catch (error) {
    console.error('Error getting quote requests:', error);
    throw error;
  }
};

export const updateQuoteRequestStatus = async (id: string, status: QuoteRequest['status']) => {
  try {
    const docRef = doc(db, 'quoteRequests', id);
    await updateDoc(docRef, { status });
  } catch (error) {
    console.error('Error updating quote request status:', error);
    throw error;
  }
};

// Services
export const addService = async (serviceData: Omit<Service, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'services'), {
      ...serviceData,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding service:', error);
    throw error;
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const q = query(collection(db, 'services'), orderBy('createdAt', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate()
    })) as Service[];
  } catch (error) {
    console.error('Error getting services:', error);
    throw error;
  }
};

export const updateService = async (id: string, serviceData: Partial<Service>) => {
  try {
    const docRef = doc(db, 'services', id);
    await updateDoc(docRef, serviceData);
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
};

export const deleteService = async (id: string) => {
  try {
    const docRef = doc(db, 'services', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
};
// Firestore Service
// Handles all database operations for events

import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase.config';

const EVENTS_COLLECTION = 'events';

export interface Event {
  id?: string;
  title: string;
  city: string;
  venue: string;
  date: string;
  time?: string;
  description: string;
  image: string;
  status: string;
  schedule?: Array<{ time: string; activity: string }>;
  createdAt?: any;
  updatedAt?: any;
}

/**
 * Create a new event in Firestore
 */
export const createEvent = async (eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, EVENTS_COLLECTION), {
      ...eventData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return { 
      success: true, 
      id: docRef.id,
      message: 'Evento criado com sucesso!' 
    };
  } catch (error: any) {
    console.error('Error creating event:', error);
    return { 
      success: false, 
      error: 'Erro ao criar evento. Tente novamente.' 
    };
  }
};

/**
 * Get all events from Firestore
 */
export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const eventsQuery = query(
      collection(db, EVENTS_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(eventsQuery);
    
    const events: Event[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Event));
    
    return events;
  } catch (error: any) {
    console.error('Error fetching events:', error);
    return [];
  }
};

/**
 * Update an existing event
 */
export const updateEvent = async (eventId: string, eventData: Partial<Event>) => {
  try {
    const eventRef = doc(db, EVENTS_COLLECTION, eventId);
    await updateDoc(eventRef, {
      ...eventData,
      updatedAt: serverTimestamp()
    });
    
    return { 
      success: true, 
      message: 'Evento atualizado com sucesso!' 
    };
  } catch (error: any) {
    console.error('Error updating event:', error);
    return { 
      success: false, 
      error: 'Erro ao atualizar evento. Tente novamente.' 
    };
  }
};

/**
 * Delete an event
 */
export const deleteEvent = async (eventId: string) => {
  try {
    const eventRef = doc(db, EVENTS_COLLECTION, eventId);
    await deleteDoc(eventRef);
    
    return { 
      success: true, 
      message: 'Evento excluído com sucesso!' 
    };
  } catch (error: any) {
    console.error('Error deleting event:', error);
    return { 
      success: false, 
      error: 'Erro ao excluir evento. Tente novamente.' 
    };
  }
};

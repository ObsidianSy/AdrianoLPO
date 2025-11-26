// Type definitions for the Adriano Rodrigo Mentor de Posicionamento app

export interface Event {
  id: number;
  city: string;
  venue: string;
  date: string;
  time?: string;
  title: string;
  description: string;
  image: string;
  status: string;
  schedule?: ScheduleItem[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface Card {
  id: number;
  title: string;
  image: string;
  link: string;
  action?: string | null;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Pillar {
  title: string;
  text: string;
}

export interface Value {
  title: string;
  text: string;
}

export interface AdminModalProps {
  onClose: () => void;
  onSave: (event: Omit<Event, 'id'>) => void;
  events: Event[];
  onDelete: (id: number) => void;
}

export interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export interface AgendaPageProps {
  onBack: () => void;
  events: Event[];
}

export interface QuickLinksProps {
  onNavigate: (view: string) => void;
}

export interface FooterProps {
  onOpenAdmin: () => void;
}

export interface MainContentProps {
  onNavigate: (view: string) => void;
  onOpenAdmin: () => void;
}

export interface Testimonial {
  id: number;
  imagePath: string;
  name: string;
  university: string;
  description: string;
  rating: number;
  conferencecode: string;
}

export interface CommitteeMember {
  id: number;
  conferencecode: string;
  name: string;
  university: string;
  orderIndex: number;
}

export interface ImportantDate {
  id: number;
  date: string;
  conferencecode: string;
  dateType: string;
}

export interface Sponsor {
  id: number;
  name: string;
  type: string;
  conferencecode: string;
  imagePath: string;
}

export interface Topic {
  id: number;
  topicName: string;
  conferencecode: string;
  orderIndex: number;
}

export interface Speaker {
  id: number;
  name: string;
  university: string;
  conferencecode: string;
  imagePath: string;
  speakerType: string;
  orderIndex: number;
}

export interface Venue {
  id: number;
  venue: string;
  conferencecode: string;
  description: string;
}

export interface AgendaItem {
  id: number;
  conferencecode: string;
  day: string;
  time: string;
  title: string;
  description: string;
  speaker: string;
  room: string;
  orderIndex: number;
}

export interface ConferenceData {
  testimonials: Testimonial[];
  committee: CommitteeMember[];
  importantDates: ImportantDate[];
  sponsors: Sponsor[];
  topics: Topic[];
  speakers: Speaker[];
  venues: Venue[];
  agenda: AgendaItem[];
}
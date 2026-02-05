export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
}

export enum ComplaintStatus {
  SUBMITTED = 'SUBMITTED',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export enum UrgencyLevel {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export interface Complaint {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  dateFiled: string;
  status: ComplaintStatus;
  urgency: UrgencyLevel;
  upvotes: number;
  stage: number; // 1-5 for tracker
  estimatedCompletion?: string;
  assignedTo?: string;
}

export interface StatMetric {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  icon: string;
  colorClass: string;
}

export interface HostelData {
  name: string;
  satisfaction: number;
  issues: number;
}

export interface Student {
  id: string;
  name: string;
  matricNo: string;
  hall: string;
  room: string;
  department: string;
  level: string;
  email: string;
  phone: string;
}

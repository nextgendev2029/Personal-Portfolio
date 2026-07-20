export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  board?: string;
  year: string;
  grade: string;
  highlight?: string; // e.g. 'CS: 97/100'
}

export interface CertificationEntry {
  title: string;
  description: string;
  url?: string;
}

// src/utils/data.ts
export const mockSymptoms = [
  'Headache',
  'Fever',
  'Cough',
  'Fatigue',
  'Nausea',
  'Sore throat',
  'Body aches',
  'Shortness of breath',
];

export const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Physician',
    rating: 4.9,
    experience: '12 years',
    nextAvailable: 'Today, 2:30 PM',
    consultationFee: '$50',
    languages: ['English', 'Spanish'],
    availableFor: ['video', 'audio', 'chat']
  },
  // Add more mock data...
];

export const mockHealthRecords = [
  {
    id: 1,
    date: '2024-01-15',
    type: 'Consultation',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Upper Respiratory Infection',
    prescription: 'Amoxicillin 500mg',
    notes: 'Rest and hydrate'
  },
  // Add more records...
];
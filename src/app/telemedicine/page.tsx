// src/app/telemedicine/page.tsx
import DoctorCard from '@/components/DoctorCard'
import { Search, Filter, Video, Phone, MessageSquare } from 'lucide-react'

const doctors = [
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
  // Add more doctors...
]

export default function TelemedicinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Telemedicine</h1>
        <p className="text-gray-600">Connect instantly with verified healthcare professionals</p>
      </div>

      {/* Search and Filter */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by specialty, name, or symptoms..."
              className="input-field pl-10"
            />
          </div>
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Doctor List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Consultation Types */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Consultation Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {consultationTypes.map((type, index) => (
            <div key={index} className="card text-center">
              <div className="p-4 bg-health-blue/10 w-fit rounded-lg mx-auto mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <button className="btn-primary w-full">
                {type.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const consultationTypes = [
  {
    icon: <Video className="h-8 w-8 text-health-blue" />,
    title: 'Video Consultation',
    description: 'Face-to-face consultation with high-quality video',
    action: 'Start Video Call'
  },
  {
    icon: <Phone className="h-8 w-8 text-health-teal" />,
    title: 'Audio Call',
    description: 'Private phone consultation with your doctor',
    action: 'Start Audio Call'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-health-purple" />,
    title: 'Chat Consultation',
    description: 'Text-based consultation with photo sharing',
    action: 'Start Chat'
  },
]
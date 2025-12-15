// src/components/DoctorCard.tsx
import { Video, Phone, MessageSquare, Star } from 'lucide-react'

interface Doctor {
  id: number
  name: string
  specialty: string
  rating: number
  experience: string
  nextAvailable: string
  consultationFee: string
  languages: string[]
  availableFor: string[]
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        {/* Doctor Avatar */}
        <div className="w-16 h-16 bg-health-blue rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {doctor.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-health-blue font-medium">{doctor.specialty}</p>

          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
            </div>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-600">{doctor.experience}</span>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            Next available: {doctor.nextAvailable}
          </p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            {doctor.consultationFee}
          </p>

          {/* Languages */}
          <div className="flex flex-wrap gap-1 mt-2">
            {doctor.languages.map((lang) => (
              <span key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Options */}
      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {doctor.availableFor.includes('video') && (
              <button className="flex items-center space-x-1 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                <Video className="h-4 w-4" />
                <span>Video</span>
              </button>
            )}
            {doctor.availableFor.includes('audio') && (
              <button className="flex items-center space-x-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200">
                <Phone className="h-4 w-4" />
                <span>Audio</span>
              </button>
            )}
            {doctor.availableFor.includes('chat') && (
              <button className="flex items-center space-x-1 text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200">
                <MessageSquare className="h-4 w-4" />
                <span>Chat</span>
              </button>
            )}
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

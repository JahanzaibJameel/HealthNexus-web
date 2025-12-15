// src/components/Footer.tsx
import Link from 'next/link'
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-6 w-6 text-health-blue" />
              <span className="text-xl font-bold">Health<span className="text-health-blue">Nexus</span></span>
            </div>
            <p className="text-gray-400">
              Empowering citizens through AI-driven healthcare solutions and seamless telemedicine services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Symptom Checker', 'Telemedicine', 'Health Records', 'Community', 'Alerts'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-health-blue" />
                <span className="text-gray-400">support@healthnexus.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-health-blue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-health-blue" />
                <span className="text-gray-400">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* University Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Final Year Project</h3>
            <p className="text-gray-400 mb-2">
              Federal Urdu University of Arts, Science and Technology
            </p>
            <p className="text-sm text-gray-500">
              Developed by: Muhammad Sajid, Muhammad Owais Raza, Razaq Khalid Rao, Muhammad Raheel
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} HealthNexus. All rights reserved.</p>
          <p className="text-sm mt-2">
            This is a final year project demonstration. For medical emergencies, please contact local emergency services.
          </p>
        </div>
      </div>
    </footer>
  )
}
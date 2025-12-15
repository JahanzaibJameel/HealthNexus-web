// src/app/page.tsx
import SymptomChecker from '@/components/SymptomChecker'
import DashboardStats from '@/components/DashboardStats'
import { Stethoscope, Users, FileText, Bell, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-health-blue">HealthNexus</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your AI-powered digital health companion. Get instant symptom analysis, 
          connect with verified doctors, and manage your health records seamlessly.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/symptom-checker" className="btn-primary">
            Check Symptoms Now
          </Link>
          <Link href="/telemedicine" className="btn-secondary">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Symptom Checker Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          AI-Powered Symptom Checker
        </h2>
        <SymptomChecker />
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="p-4 bg-health-blue/10 w-fit rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Stats */}
      <DashboardStats />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-health-blue to-health-teal rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take control of your health?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of users who trust HealthNexus for their healthcare needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-health-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
            Get Started Free
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: <Stethoscope className="h-8 w-8 text-health-blue" />,
    title: 'AI Symptom Analysis',
    description: 'Get instant analysis of your symptoms with confidence scores and probable conditions.'
  },
  {
    icon: <Users className="h-8 w-8 text-health-purple" />,
    title: 'Telemedicine',
    description: 'Connect instantly with verified doctors for remote consultations via video, audio, or chat.'
  },
  {
    icon: <FileText className="h-8 w-8 text-health-teal" />,
    title: 'Health Records',
    description: 'Securely store and manage all your medical records, prescriptions, and consultation history.'
  },
  {
    icon: <Bell className="h-8 w-8 text-health-green" />,
    title: 'Personalized Alerts',
    description: 'Receive timely reminders, health advisories, and medication alerts tailored to your needs.'
  },
  {
    icon: <Shield className="h-8 w-8 text-gray-700" />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected with enterprise-grade security measures.'
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    title: 'Fast & Reliable',
    description: 'Get immediate responses and 24/7 access to healthcare services.'
  },
]
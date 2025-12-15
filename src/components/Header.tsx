// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Stethoscope, Bell } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Symptom Checker', href: '/symptom-checker' },
  { name: 'Telemedicine', href: '/telemedicine' },
  { name: 'Health Records', href: '/health-records' },
  { name: 'Community', href: '/community' },
  { name: 'Alerts', href: '/alerts' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo skeleton */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
              <div className="h-6 w-32 bg-gray-200 rounded"></div>
            </div>
            {/* Menu skeleton */}
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-health-blue" />
            <span className="text-2xl font-bold text-gray-900">Health<span className="text-health-blue">Nexus</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-health-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-health-blue">
              <Bell className="h-5 w-5" />
            </button>
            <button className="btn-primary">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-2 text-gray-700 hover:text-health-blue font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <button className="w-full btn-primary">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
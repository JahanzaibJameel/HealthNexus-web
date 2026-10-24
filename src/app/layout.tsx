// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import SkipToContent from '@/components/SkipToContent'
import PWAInstaller from '@/components/PWAInstaller'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthNexus - Your Digital Health Companion',
  description: 'AI-powered symptom checker and telemedicine platform',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'HealthNexus',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add this to prevent extension interference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent extensions from modifying the DOM during hydration
              Object.defineProperty(window, 'cz_shortcut', {
                get() { return undefined },
                set() {},
                configurable: false
              });
            `,
          }}
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipToContent />
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <PWAInstaller />
        </ThemeProvider>
      </body>
    </html>
  )
}
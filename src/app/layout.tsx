// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthNexus - Your Digital Health Companion',
  description: 'AI-powered symptom checker and telemedicine platform',
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
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
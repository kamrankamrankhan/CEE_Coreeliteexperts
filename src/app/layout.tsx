import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'CEE Company - Innovative Digital Solutions',
  description: 'Empowering businesses with innovative digital solutions. We specialize in web development, mobile applications, and cutting-edge 3D visualization technologies.',
  keywords: 'web development, mobile apps, 3D visualization, digital solutions, technology consulting',
  authors: [{ name: 'CEE Company' }],
  creator: 'CEE Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ceecompany.com',
    title: 'CEE Company - Innovative Digital Solutions',
    description: 'Empowering businesses with innovative digital solutions.',
    siteName: 'CEE Company',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEE Company - Innovative Digital Solutions',
    description: 'Empowering businesses with innovative digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

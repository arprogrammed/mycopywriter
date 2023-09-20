import './globals.css'
import type { Metadata } from 'next'
import { Kalam, Ubuntu } from 'next/font/google'
import AuthProvider from './components/AuthProvider/AuthProvider'

const kalam = Kalam({ 
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const unbuntu = Ubuntu({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Copy Writer AI',
  description: 'An AI assistant that helps copywriting professionals work smarter!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <body className={unbuntu.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </html>
  )
}

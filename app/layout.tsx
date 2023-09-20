import './globals.css';
import type { Metadata } from 'next';
import AuthProvider from './components/AuthProvider/AuthProvider';
import { ubuntu } from '@/app/fonts';

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
        <body className={ubuntu.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </html>
  )
}

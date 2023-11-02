import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import ClientProviders from '@/components/client-provider'
import FirebaseAuthProvider from '@/components/firebase-auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatAI',
  description: 'Next Gen Chat AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className={inter.className}>
          <FirebaseAuthProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
              <Header/>
              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  )
}

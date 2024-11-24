import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import ClientProviders from '@/components/client-provider'
import FirebaseAuthProvider from '@/components/firebase-auth-provider'
import SubscriptionProvider from '@/components/subscription-provider'
import Providers from '@/app/providers';

//import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"
import { getConfig } from '@/lib/media/config';

const inter = Inter({ subsets: ['latin'] })
const { title } = getConfig();

export const metadata: Metadata = {
  title,
  description: 'Try Now!',
  openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url: "/images/translate.png"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
              >
                <Providers>
                {children}
                </Providers>
                <Toaster/>
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  )
}

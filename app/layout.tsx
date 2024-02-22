import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import {
  ThemeProvider,
  cn,
  MaxWidthWrapper,
  SeoMeta,
  CheckInternet
} from '@/lib'
import { Header, Footer } from '@/components/reusables'
import Transition from './template'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = SeoMeta(0)

export const viewport: Viewport = {
  themeColor: '#3FB5FA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'font-san m-auto min-h-screen max-w-screen-2xl bg-background antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          <MaxWidthWrapper>
            <Transition>
              <Header />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
              <GoogleTagManager gtmId='GTM-PT7G5R5D' />
              <GoogleAnalytics gaId='G-8N74TFDECJ' />
            </Transition>
            <CheckInternet />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

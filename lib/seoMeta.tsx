import { Metadata } from 'next'
import { SeoData } from '@/json'
import { cn } from './utils'

const SeoMeta = (index: number): Metadata => {
  const currentSeoData = SeoData[index] || {}

  return {
    manifest: '/site.webmanifest',
    title: {
      default: currentSeoData.LAYOUT_SEO_TITLE,
      template: 'DotHost %s'
    },
    description: currentSeoData.LAYOUT_SEO_DESCRIPTION || '',
    generator: currentSeoData.LAYOUT_CREATORS || '',
    appleWebApp: {
      title: currentSeoData.LAYOUT_APPLICATION_NAME,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/images/icons/apple-touch-icon-144x144.png',
        {
          url: '/images/icons/apple-touch-icon-144x144.png',
          media: '(device-width: 768px) and (device-height: 1024px)'
        }
      ]
    },
    appLinks: {
      web: {
        url: 'https://usedothost.com',
        should_fallback: true
      }
    },
    applicationName: currentSeoData.LAYOUT_APPLICATION_NAME || '',
    referrer: 'origin-when-cross-origin',
    keywords: currentSeoData.LAYOUT_KEYWORDS || '',
    authors: [
      { name: 'Abolade Greatness', url: 'https://github.com/thegrtnx' }
    ],
    creator: currentSeoData.LAYOUT_CREATORS || '',
    publisher: 'curlback inc',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(cn(currentSeoData.LAYOUT_URL || '')),
    alternates: {
      canonical: currentSeoData.LAYOUT_URL || ''
    },
    openGraph: {
      title: currentSeoData.LAYOUT_SEO_TITLE || '',
      description: currentSeoData.LAYOUT_SEO_DESCRIPTION || '',
      url: currentSeoData.LAYOUT_URL || '',
      siteName: currentSeoData.LAYOUT_APPLICATION_NAME || '',
      images: [
        {
          url: '/images/thumbnail/YTThumbnail.jpg',
          width: 1280,
          height: 720,
          alt: currentSeoData.LAYOUT_APPLICATION_NAME || ''
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    icons: {
      icon: '/images/icons/favicon-32x32.png',
      shortcut: '/images/icons/favicon-16x16.png',
      apple: '/images/icons/apple-touch-icon.png',
      other: [
        {
          rel: 'icon',
          url: '/images/icons/android-chrome-192x192.png'
        },
        {
          rel: 'mask-icon',
          url: '/images/icons/safari-pinned-tab.svg'
        },
        {
          rel: 'msapplication-TileImage',
          url: '/images/icons/mstile-144x144.png'
        }
      ]
    },
    verification: {
      google: 'google',
      other: {
        me: ['hello@usedothost.com', 'usedothost.com']
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: currentSeoData.LAYOUT_APPLICATION_NAME || '',
      description: currentSeoData.LAYOUT_SEO_DESCRIPTION || '',
      creator: '@usedothost',
      images: ['/images/thumbnail/YTThumbnail.jpg']
    },
    category: 'technology'
  }
}

export default SeoMeta

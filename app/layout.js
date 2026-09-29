import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://managroupprojects.com'),
  title: 'Mana Group Projects | Premium Real Estate',
  description: 'Explore the latest premium projects by Mana Group. Find your dream home today.',
  keywords: [
    'Mana Group Projects',
    'Mana Projects Bengaluru',
    'Luxury Flats in Bengaluru',
    'Premium Real Estate',
  ],
  authors: [{ name: 'Mana Group Projects' }],
  creator: 'Mana Group Projects',
  publisher: 'Mana Group Projects',
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
  alternates: {
    canonical: 'https://managroupprojects.com/',
  },
  openGraph: {
    title: 'Mana Group Projects | Premium Real Estate',
    description: 'Explore the latest premium projects by Mana Group. Find your dream home today.',
    url: 'https://managroupprojects.com/',
    siteName: 'Mana Group Projects',
    images: [
      {
        url: '/images/home/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Mana Group Projects',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mana Group Projects | Premium Real Estate',
    description: 'Explore the latest premium projects by Mana Group. Find your dream home today.',
    images: ['/images/home/hero-banner.jpg'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
    shortcut: '/images/favicon/fav.webp',
    apple: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://managroupprojects.com/#agent",
                  "name": "Mana Group Projects",
                  "url": "https://managroupprojects.com/",
                  "logo": "https://managroupprojects.com/images/logo/Logo.webp",
                  "image": "https://managroupprojects.com/images/home/hero-banner.jpg",
                  "description": "Premium real estate projects by Mana Group.",
                  "telephone": "+919718344024",
                  "sameAs": [
                    "https://managroupprojects.com/"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

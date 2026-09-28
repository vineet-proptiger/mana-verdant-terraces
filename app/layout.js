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
  title: 'Mana Verdant Terraces | Luxury 3 & 4 BHK Flats in Bengaluru',
  description: 'Discover Mana Verdant Terraces on Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK stepped terrace residences starting at ₹2.5 Cr with 80+ world-class amenities.',
  keywords: [
    'Mana Verdant Terraces',
    'Mana Group Projects',
    'Mana Projects Bengaluru',
    'Mana Verdant Terraces Sarjapur',
    '3 BHK Apartments Sarjapur Road',
    '4 BHK Apartments Sarjapur Road',
    'Luxury Flats in Bengaluru',
    'Mana Verdant Terraces Floor Plan',
    'Mana Verdant Terraces Price',
    'Mana Verdant Terraces Location',
    'Apartments on Sarjapur ORR',
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
    title: 'Mana Verdant Terraces | Luxury 3 & 4 BHK Flats in Bengaluru',
    description: 'Discover Mana Verdant Terraces on Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK luxury residences starting at ₹2.5 Cr with world-class amenities.',
    url: 'https://managroupprojects.com/',
    siteName: 'Mana Group Projects - Mana Verdant Terraces',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Mana Verdant Terraces Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mana Verdant Terraces | Luxury 3 & 4 BHK Flats in Bengaluru',
    description: 'Discover Mana Verdant Terraces on Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK luxury residences starting at ₹2.5 Cr with world-class amenities.',
    images: ['/images/hero/banner.webp'],
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
                  "name": "Mana Verdant Terraces",
                  "url": "https://managroupprojects.com/",
                  "logo": "https://managroupprojects.com/images/logo/Logo.webp",
                  "image": "https://managroupprojects.com/images/hero/banner.webp",
                  "description": "Mana Verdant Terraces, Bengaluru's premium residential development in Sarjapur ORR Tech Corridor offering 3 & 4 BHK luxury residences.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sarjapur ORR Tech Corridor, Doddakanahalli, Varthur Hobli",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560035",
                    "addressCountry": "IN"
                  },
                  "telephone": "+919718344024",
                  "priceRange": "₹ 2.5 Crore Onwards",
                  "sameAs": [
                    "https://managroupprojects.com/"
                  ]
                },
                {
                  "@type": "ApartmentComplex",
                  "@id": "https://managroupprojects.com/#complex",
                  "name": "Mana Verdant Terraces",
                  "description": "Stepped terrace residences across four green spires on 8.67 acres in Doddakanahalli, Sarjapur ORR Tech Corridor, Bengaluru.",
                  "url": "https://managroupprojects.com/",
                  "telephone": "+919718344024",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sarjapur ORR Tech Corridor, Doddakanahalli, Varthur Hobli",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560035",
                    "addressCountry": "IN"
                  },
                  "amenityFeature": [
                    { "@type": "LocationFeatureSpecification", "name": "80+ Lifestyle Amenities", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Stepped Terraces", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "No Common Walls", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "4 Green Spires", "value": true }
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

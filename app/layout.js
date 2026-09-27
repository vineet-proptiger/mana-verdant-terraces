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
  metadataBase: new URL('https://manaverdantterraces.com'),
  title: 'Mana Verdant Terraces | Luxury 3 & 4 BHK Flats in Bengaluru',
  description: "Discover Mana Verdant Terraces in Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK luxury residences starting at ₹2.5 Cr with world-class amenities ",
  alternates: {
    canonical: 'https://manaverdantterraces.com/',
  },
  openGraph: {
    title: 'Mana Verdant Terraces | Luxury 3 & 4 BHK Flats in Bengaluru',
    description: "Discover Mana Verdant Terraces in Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK luxury residences starting at ₹2.5 Cr with world-class amenities ",
    url: 'https://manaverdantterraces.com/',
    siteName: 'Mana Verdant Terraces',
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
    description: "Discover Mana Verdant Terraces in Sarjapur ORR Tech Corridor, Bengaluru. Premium 3 & 4 BHK luxury residences starting at ₹2.5 Cr with world-class amenities ",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
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
              "@type": "RealEstateAgent",
              "name": "Mana Verdant Terraces",
              "url": "https://manaverdantterraces.com/",
              "logo": "https://manaverdantterraces.com/images/logo/Logo.webp",
              "image": "https://manaverdantterraces.com/images/hero/banner.webp",
              "description": "Mana Verdant Terraces, Bengaluru's premium residential development in Sarjapur ORR Tech Corridor offering 3 & 4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sarjapur ORR Tech Corridor, Sarjapur",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560035",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 2.5 Crore Onwards",
              "sameAs": [
                "https://manaverdantterraces.com/"
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

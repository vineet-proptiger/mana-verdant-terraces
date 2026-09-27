'use client'
import React from 'react'
import { MapPin, TreePine, ShieldCheck, Layers, Zap, Award } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const highlightsData = [
  {
    icon: ShieldCheck,
    title: 'Privacy-Focused Residences',
    desc: 'Crafted with zero common walls for acoustic privacy and paired with extra-large Vastu-compliant balconies.',
  },
  {
    icon: TreePine,
    title: 'Green Spires & Stepped Terraces',
    desc: 'Four green spires featuring lush open-to-sky stepped terraces, private verandahs, shade, and natural cross-ventilation.',
  },
  {
    icon: Award,
    title: 'Grohe & Roca Bath Fittings',
    desc: 'Named CP & sanitary fittings by Grohe, American Standard, Roca, or Vitra with concealed hot and cold CPVC plumbing.',
  },
  {
    icon: Layers,
    title: '160 mm RCC & Wooden Flooring',
    desc: 'Robust 160 mm RCC wall structure, laminated wooden flooring in master bedroom, and teak wood entrance door.',
  },
  {
    icon: Zap,
    title: '100% In-Home Backup & Otis Lifts',
    desc: 'Kirloskar power backup inside every home, Anchor/Schneider wiring, and Schindler, Otis, or Kone automatic lifts.',
  },
  {
    icon: MapPin,
    title: 'Prime Sarjapur ORR Corridor',
    desc: 'Prominently located at Doddakanahalli, Varthur Hobli with quick access to Wipro SEZ, RGA Techpark, and Bellandur.',
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section 
      id="highlights" 
      className="about_us pt-12 sm:pt-14 md:pt-16 pb-12 md:pb-16 relative bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/highlights/highlight.webp')" }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-[#05070B]/75 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        <h2 
          className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-white text-center" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          style={{ fontFamily: F_JOST, marginBottom: '10px' }}
        >
          PROJECT HIGHLIGHTS &amp; USPS
        </h2>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-10" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1.5px] bg-[#000000]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#000000] mx-3 ring-4 ring-black/15"></div>
          <div className="w-16 h-[1.5px] bg-[#000000]"></div>
        </div>
        
        {/* 5 Highlights Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {highlightsData.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={idx * 100}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)] hover:border-black transform transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-default"
              >
                {/* Modern Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-[#000000] mb-5 shadow-xs group-hover:scale-110 group-hover:bg-[#000000] group-hover:text-white group-hover:border-black transition-all duration-300">
                  <IconComponent size={30} strokeWidth={1.9} />
                </div>

                {/* Title */}
                <h3 
                  className="text-[18px] sm:text-[19px] font-bold mb-2.5 text-[#0A0A0A] tracking-tight group-hover:text-black transition-colors duration-300" 
                  style={{ fontFamily: F_JOST }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#333333] text-[13.5px] sm:text-[14px] leading-[1.65]"
                  style={{ fontFamily: F_SANS }}
                >
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights

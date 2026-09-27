'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #FDFBF7;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      
      {/* Section Header - Spanning across top */}
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>Mana Verdant Terraces</h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#000000]"></div>
          <div className="w-2 h-2 rounded-full bg-[#000000] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#000000]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Luxury 3 & 4 BHK Stepped Terrace Residences on Sarjapur ORR</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* Left Side: Content Box (Paragraph + 3 Info Boxes) */}
        <div className="w-full lg:w-[60%] xl:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-7 xl:p-8 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.22)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#0A0A0A' }}
          >
            <div>
              <p style={{ fontSize: '15.5px', fontFamily: '"Poppins", sans-serif', color: '#E5EDDC', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  M
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>a</span>na Verdant Terraces reimagines luxury living across four green spires spread over 8.67 acres on the Sarjapur ORR tech corridor. Expansive stepped terraces and private outdoor realms carry the design idea at every level, with vertical landscaping woven into Vastu compliant layouts to create a serene, connected community for buyers who want space, greenery and a long term address rather than a quick flip.
                <span className="inline md:hidden">{!isExpanded ? '... ' : ' '}</span>
                <span className={`${isExpanded ? 'inline' : 'hidden'} md:inline`}>
                  Every residence in the current phase is a 3 & 4 BHK home designed with no common walls, which means genuine acoustic privacy rather than the shared party wall arrangement most towers rely on. Each home is paired with XXL balconies that make the outdoors usable rather than ornamental, and the stepped massing means many of those terraces are open to the sky rather than tucked under the slab above.
                </span>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  type="button"
                  className="md:hidden text-white hover:text-gray-300 font-bold inline-flex items-center gap-1 transition-colors cursor-pointer ml-1 select-none focus:outline-none underline"
                  style={{ fontSize: '15px' }}
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </p>
            </div>

            {/* Info Boxes inside the background container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xl:gap-3 mt-6 sm:mt-8 pt-6 border-t border-white/20">
              
              {/* Box 1: Total Project Area */}
              <div className="flex items-center gap-2 xl:gap-2.5 px-2.5 py-3 xl:px-3.5 xl:py-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 xl:w-7 xl:h-7 text-[#000000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4.97-4.97-8-8.58-8-12a8 8 0 1 1 16 0c0 3.42-3.03 7.03-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[13.5px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[15px] 2xl:text-[17px] font-bold text-[#0A0A0A] leading-tight uppercase whitespace-nowrap">
                    8.67 Acres
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[9.5px] sm:text-[9px] md:text-[9.5px] xl:text-[11px] text-gray-500 font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    Total Project Area
                  </span>
                </div>
              </div>

              {/* Box 2: Towers */}
              <div className="flex items-center gap-2 xl:gap-2.5 px-2.5 py-3 xl:px-3.5 xl:py-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 xl:w-7 xl:h-7 text-[#000000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[13.5px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[15px] 2xl:text-[17px] font-bold text-[#0A0A0A] leading-tight uppercase whitespace-nowrap">
                    04 Towers
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[9.5px] sm:text-[9px] md:text-[9.5px] xl:text-[11px] text-gray-500 font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    Residential Towers
                  </span>
                </div>
              </div>

              {/* Box 3: Residences */}
              <div className="flex items-center gap-2 xl:gap-2.5 px-2.5 py-3 xl:px-3.5 xl:py-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 xl:w-7 xl:h-7 text-[#000000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[13.5px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[15px] 2xl:text-[17px] font-bold text-[#0A0A0A] leading-tight uppercase whitespace-nowrap">
                    318 Flats
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[9.5px] sm:text-[9px] md:text-[9.5px] xl:text-[11px] text-gray-500 font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    Total Residences (Phase 1)
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Image starting at the exact same height */}
        <div className="w-full lg:w-[40%] xl:w-5/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white flex-1 min-h-[380px] sm:min-h-[480px]">
            <Image
              src={overviewImage}
              alt="Mana Verdant Terraces - Tower Elevation"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview

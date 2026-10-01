import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mana Group Projects | Premium Real Estate',
  description: 'Explore the latest premium projects by Mana Group. Find your dream home today.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] pt-[66px] md:pt-[80px]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white py-2 px-6 md:px-12 flex justify-center border-b border-gray-200 shadow-sm">
        <div className="relative w-[160px] h-[50px] md:w-[200px] md:h-[64px]">
          <Image
            src="/images/home-logo/mana-group-logo.png"
            alt="Mana Group Logo"
            fill
            sizes="220px"
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/images/home/hero-banner.jpg"
          alt="Mana Group Projects"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wider uppercase font-sans mb-4">
            Mana Group Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl">
            Discover our exclusive collection of premium residential projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">
            Our Projects
          </h2>
          <div className="w-24 h-[2px] bg-black mt-5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card: Mana Verdant Terraces */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/images/about/about.webp"
                alt="Mana Verdant Terraces"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-3">
                Mana Verdant Terraces
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Mana Verdant Terraces is located on the bustling Sarjapur ORR Tech Corridor in Doddakanahalli. Experience ultra-luxury living with stepped terraces and 80+ lifestyle amenities across 8.67 acres.
              </p>
              <Link 
                href="/mana-verdant-terraces"
                className="inline-block w-full text-center bg-black text-white border border-black font-bold py-3 px-6 rounded hover:bg-white hover:text-black transition-colors uppercase tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Project Card: Mana Skanda The Right Life */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/mana-right-life/about/about.webp"
                alt="Mana Skanda The Right Life"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-3">
                Mana The Right Life
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Embrace The Right Life by Mana Skanda, where each dawn brings promise and every dusk contentment in Sarjapur Road, Bangalore East. Luxurious housing units with world-class amenities.
              </p>
              <Link 
                href="/mana-right-life"
                className="inline-block w-full text-center bg-black text-white border border-black font-bold py-3 px-6 rounded hover:bg-white hover:text-black transition-colors uppercase tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-black py-8 text-center border-t border-[#333333]">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mana Group Projects. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}

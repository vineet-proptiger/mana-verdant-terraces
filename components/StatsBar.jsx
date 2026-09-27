const stats = [
  { value: '8.67', label: 'acre address', icon: (
    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  ) },
  { value: '4', label: 'green spires', icon: (
    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>
  ) },
  { value: 'G+19', label: 'floors', icon: (
    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v8l9-11h-7z"></path>
    </svg>
  ) },
  { value: '318', label: 'units, Phase 1', icon: (
    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  ) },
]

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const StatsBar = () => (
  <div style={{
    background: '#ffffff',
    padding: '30px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  }}>
    {stats.map((s, i) => (
      <div key={i} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '15px 30px',
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        minWidth: '220px',
      }}
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
        <div style={{ flexShrink: 0 }}>
          {s.icon}
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <span style={{
            fontFamily: F_JOST,
            fontSize: '22px',
            fontWeight: '700',
            color: '#000000',
            lineHeight: 1.2,
          }}>{s.value}</span>
          <span style={{
            fontFamily: F_SANS,
            fontSize: '15px',
            color: '#666',
            lineHeight: 1.3,
          }}>{s.label}</span>
        </div>
      </div>
    ))}
  </div>
)

export default StatsBar

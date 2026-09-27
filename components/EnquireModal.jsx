'use client'
import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
import { X } from 'lucide-react'
import LeadForm from './LeadForm'
// import { popupImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  const autoTriggered = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (autoTriggered.current) return
    if (typeof window !== 'undefined' && localStorage.getItem('_lsub_done') === '1') return
    const initial = setTimeout(() => {
      autoTriggered.current = true
      setIsOpen(true)
      intervalRef.current = setInterval(() => setIsOpen(true), 30000)
    }, 15000)
    return () => {
      clearTimeout(initial)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [setIsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[92vw] sm:w-[440px] h-auto rounded-3xl flex flex-col justify-center items-center p-8 mx-auto"
        style={{
          background: 'radial-gradient(135% 135% at 50% 20%, #111827 0%, #000000 60%, #05070B 100%)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.06)',
          animation: 'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[320px] flex flex-col justify-center items-center">
          <div className="text-center mb-5 flex flex-col items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 hover:scale-110 transition-all flex items-center justify-center shadow-lg cursor-pointer"
              style={{ 
                width: '30px', 
                height: '30px', 
                borderRadius: '50%', 
                background: '#1F2937',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider mb-2 uppercase text-white" style={{ fontFamily: F_JOST }}>
              Enquire Now
            </h3>
            <div className="w-10 h-[2px] bg-white rounded-full mx-auto mb-2"></div>
            <p className="text-white/80 text-[13px]" style={{ fontFamily: F_SANS }}>
              Please enter your details to know more
            </p>
            


          </div>
          <LeadForm formName="Popup Modal" btnText="SUBMIT" isTransparent={true} />
        </div>
      </div>
    </div>
  )
}

export default EnquireModal

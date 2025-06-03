"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FadeInWhenVisible } from "./animations"
import Image from "next/image"

interface Partner {
  id: number
  name: string
  logo: string
}

export function PartnersCarousel() {
  const partners = [
    { id: 1, name: "ENGIE", logo: "/partners/engie-logo.png" },
    { id: 2, name: "Unilever", logo: "/partners/unilever-logo.png" },
    { id: 3, name: "ORYX", logo: "/partners/oryx-logo.png" },
    { id: 4, name: "BICICI", logo: "/partners/bicici-logo.png" },
    { id: 5, name: "NSIA", logo: "/partners/nsia-logo.png" },
    { id: 6, name: "UBA", logo: "/partners/uba-logo.png" },
    { id: 7, name: "CORIS BANK", logo: "/partners/coris-bank-logo.png" },
    { id: 8, name: "SOLARX", logo: "/partners/solarx-logo.png" },
    { id: 9, name: "MADIS", logo: "/partners/madis-logo.png" },
    { id: 10, name: "ATLANTA", logo: "/partners/atlanta-logo.png" },
    { id: 11, name: "Ecobank", logo: "/partners/ecobank-logo.png" },
    { id: 12, name: "TOTAL", logo: "/partners/total-logo.png" },
    { id: 13, name: "GDCI", logo: "/partners/gdci-logo.png" },
    { id: 14, name: "ANSUT", logo: "/partners/ansut-logo.png" },
    { id: 15, name: "CDCI", logo: "/partners/cdci-logo.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)

  const visiblePartners = 5
  const maxIndex = Math.max(0, partners.length - visiblePartners)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }

    autoScrollTimerRef.current = setInterval(() => {
      nextSlide()
    }, 3000)
  }

  const stopAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
      autoScrollTimerRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [isAutoScrolling, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoScrolling(false)
  }

  const handleMouseLeave = () => {
    setIsAutoScrolling(true)
  }

  return (
    <FadeInWhenVisible>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Ils nous font confiance</h2>
            <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
             Y3 Audit & Conseil se positionne comme le partenaire de confiance de ses clients,
             les accompagnant au quotidien et à chaque étape clé de leur développement.
            </p>
          </div>

          <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visiblePartners)}%)` }}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="min-w-[20%] px-4">
                  <div className="bg-white rounded-lg p-6 h-40 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    {partner.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          fill
                          style={{ objectFit: "contain" }}
                          className="p-2"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                          <span className="text-gray-700 font-bold text-xl">{partner.name.charAt(0)}</span>
                        </div>
                        <p className="text-[#073E5D] font-semibold text-center">{partner.name}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {partners.length > visiblePartners && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#073E5D] text-white p-2 rounded-r-md hover:bg-[#80C342] transition-colors duration-300"
                  aria-label="Précédent"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#073E5D] text-white p-2 rounded-l-md hover:bg-[#80C342] transition-colors duration-300"
                  aria-label="Suivant"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}

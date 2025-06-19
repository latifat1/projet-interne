"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface Expert {
  id: number
  name: string
  position: string
  image: string
  slug: string
  isPartner: boolean
  bio: string
  description: string[]
  office: string
  contact: {
    email: string
    phone: string
    phoneSecondary?: string
    linkedin: string
  }
}

interface ExpertsCarouselProps {
  experts: Expert[]
  onExpertClick: (expert: Expert) => void
  title: string
}

export function ExpertsCarousel({ experts, onExpertClick, title }: ExpertsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Responsive items per page
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, experts.length - itemsPerPage)
  const shouldCenter = experts.length <= itemsPerPage

  const nextSlide = () => {
    if (shouldCenter) return // Ne pas défiler si on doit centrer
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    if (shouldCenter) return // Ne pas défiler si on doit centrer
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const startAutoScroll = () => {
    if (shouldCenter) return // Ne pas auto-défiler si on doit centrer

    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }

    autoScrollTimerRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const stopAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
      autoScrollTimerRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoScrolling && !shouldCenter) {
      startAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [isAutoScrolling, currentIndex, shouldCenter])

  const handleMouseEnter = () => {
    setIsAutoScrolling(false)
  }

  const handleMouseLeave = () => {
    setIsAutoScrolling(true)
  }

  const handleLinkedInClick = (e: React.MouseEvent, linkedinUrl?: string) => {
    e.stopPropagation() // Empêche le déclenchement du onClick de la carte
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank')
    }
  }

  if (experts.length === 0) {
    return null
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-8 text-center">{title}</h2>

        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div
            className={cn(
              "flex transition-transform duration-500 ease-in-out",
              title === "Nos Experts" ? "gap-1" : "gap-2",
              shouldCenter ? "justify-center" : ""
            )}
            style={{
              transform: shouldCenter ? "none" : `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {experts.map((expert) => (
              <div
                key={expert.id}
                className={cn(
                  "flex-shrink-0",
                  itemsPerPage === 1 ? "w-full max-w-xs px-2" : itemsPerPage === 2 ? "w-1/2 px-2" : "w-1/3 px-1",
                )}
                style={!shouldCenter ? { width: `${100 / itemsPerPage}%` } : {}}
              >
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full max-w-xs mx-auto"
                  onClick={() => onExpertClick(expert)}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={expert.image || "/placeholder.svg"}
                      alt={expert.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      priority
                    />
                    {expert.isPartner && (
                      <div className="absolute top-4 right-4 bg-[#80C342] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Associé
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#073E5D]">{expert.name}</h3>
                    <p className="text-[#80C342] font-medium mb-2 text-sm">{expert.position}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{expert.bio}</p>
                    <div className="flex justify-between items-center">
                      <button className="text-[#073E5D] font-medium hover:text-[#80C342] transition-colors flex items-center text-sm">
                        Voir le profil
                      </button>
                      <a 
                        href={expert.contact?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#073E5D] hover:text-[#80C342] transition-colors cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!shouldCenter && experts.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#073E5D] p-2 rounded-r-md shadow-md hover:bg-[#80C342] hover:text-white transition-colors duration-300 z-10"
                aria-label="Précédent"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#073E5D] p-2 rounded-l-md shadow-md hover:bg-[#80C342] hover:text-white transition-colors duration-300 z-10"
                aria-label="Suivant"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {!shouldCenter && experts.length > itemsPerPage && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-300",
                  currentIndex === index ? "bg-[#80C342]" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

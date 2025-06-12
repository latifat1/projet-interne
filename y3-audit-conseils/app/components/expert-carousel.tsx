"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Données des experts
const experts = [
  {
    id: 1,
    name: "Georges Yao Yao",
    position: "Associé Fondateur",
    image: "/professional-male-accountant.png",
    slug: "Georges Yao Yao",
    isPartner: true,
  },
  {
    id: 2,
    name: "Yves Dodo",
    position: "Associée",
    image: "/professional-female-auditor.png",
    slug: "Yves Dodo",
    isPartner: true,
  },
  {
    id: 3,
    name: "Philippe Martin",
    position: "Associé",
    image: "/professional-male-tax-advisor.png",
    slug: "philippe-martin",
    isPartner: true,
  },
  {
    id: 4,
    name: "Sophie Dubois",
    position: "Manager Senior",
    image: "/professional-female-accountant.png",
    slug: "sophie-dubois",
    isPartner: false,
  },
  {
    id: 5,
    name: "Thomas Leroy",
    position: "Manager Audit",
    image: "/placeholder-t2p7o.png",
    slug: "thomas-leroy",
    isPartner: false,
  },
]

export function ExpertCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Tri des experts : d'abord les associés, puis par ordre alphabétique
  const sortedExperts = [...experts].sort((a, b) => {
    // Si l'un est associé et l'autre non, l'associé vient en premier
    if (a.isPartner && !b.isPartner) return -1
    if (!a.isPartner && b.isPartner) return 1
    // Si les deux sont associés ou non-associés, on trie par nom
    return a.name.localeCompare(b.name)
  })

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === sortedExperts.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sortedExperts.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide()
    }
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleExpertClick = (expert: (typeof experts)[0]) => {
    // Mise à jour de l'URL avec l'expert sélectionné
    const pathname = "/a-propos/notre-equipe"
    const newUrl = `${pathname}?expert=${expert.slug}`
    window.history.pushState({ path: newUrl }, "", newUrl)

    // Recharger la page pour activer le modal
    window.location.href = newUrl
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sortedExperts.map((expert) => (
          <div key={expert.id} className="w-full flex-shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#80C342]">
                <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
              </div>
              <div className="text-center md:text-left md:max-w-md">
                <h3 className="text-2xl font-bold text-[#073E5D]">{expert.name}</h3>
                <p className="text-xl text-[#80C342] mb-4">{expert.position}</p>
                <p className="text-gray-600 mb-6">
                  Expert en audit et conseil avec plus de 15 ans d'expérience dans le secteur financier et bancaire.
                  Spécialisé dans l'accompagnement des entreprises en croissance.
                </p>
                {/* <button
                  onClick={() => handleExpertClick(expert)}
                  className="inline-block bg-[#073E5D] text-white px-6 py-2 rounded-md hover:bg-[#80C342] transition-colors"
                >
                  En savoir plus
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-6 w-6 text-[#073E5D]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight className="h-6 w-6 text-[#073E5D]" />
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sortedExperts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#80C342]" : "bg-gray-300"
            } transition-colors`}
            aria-label={`Aller à l'expert ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

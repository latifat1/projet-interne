"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Linkedin, X, Phone } from "lucide-react"

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

interface ExpertModalProps {
  expert: Expert | null
  isOpen: boolean
  onClose: () => void
}

export function ExpertModal({ expert, isOpen, onClose }: ExpertModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey)
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen])

  if (!expert) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen && isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-lg shadow-xl overflow-auto max-w-3xl w-full max-h-[90vh] transition-transform duration-300 ${
          isOpen && isAnimating ? "scale-100" : "scale-95"
        }`}
      >
        <div className="relative p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo */}
            <div className="md:w-1/4">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={expert.image || "/placeholder.svg"}
                  alt={expert.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Contact info */}
              <div className="mt-4 space-y-2">
                {/* LinkedIn */}
                <a
                  href={expert.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077B5] text-white p-2 rounded-md hover:bg-[#00669c] transition-colors w-full"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${expert.contact.phone}`}
                  className="flex items-center gap-2 bg-[#073E5D] text-white p-2 rounded-md hover:bg-[#052d43] transition-colors w-full"
                >
                  <Phone size={18} />
                  <span className="text-sm truncate">{expert.contact.phone}</span>
                </a>

                {/* Secondary Phone if available */}
                {expert.contact.phoneSecondary && (
                  <a
                    href={`tel:${expert.contact.phoneSecondary}`}
                    className="flex items-center gap-2 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition-colors w-full"
                  >
                    <Phone size={18} />
                    <span className="text-sm truncate">{expert.contact.phoneSecondary}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/4">
              <h1 className="text-2xl font-bold text-[#073E5D]">{expert.name}</h1>
              <p className="text-gray-600 mb-4">{expert.position}</p>

              <p className="text-gray-700 mb-4">{expert.bio}</p>

              {expert.description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Email */}
              <div className="mt-6 p-3 bg-gray-100 rounded-md">
                <p className="text-gray-700 font-medium">Email:</p>
                <a href={`mailto:${expert.contact.email}`} className="text-[#073E5D] hover:underline">
                  {expert.contact.email}
                </a>
              </div>

              <p className="text-gray-700 font-semibold mt-4">{expert.office}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

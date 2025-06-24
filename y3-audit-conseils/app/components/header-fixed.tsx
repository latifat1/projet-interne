"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { ImprovedDropdown } from "./improved-dropdown"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export function HeaderFixed() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const navItems: NavItem[] = [
    {
      label: "À propos",
      href: "#",
      children: [
        { label: "Notre histoire", href: "/a-propos/notre-histoire" },
        { label: "Notre équipe", href: "/a-propos/notre-equipe" },
        { label: "Nos valeurs", href: "/a-propos/nos-valeurs" },
        { label: "Notre vision et certifications", href: "/a-propos/notre-vision-et-certifications" },
      ],
    },
    
    {
      label: "Services",
      href: "#",
      children: [
        { label: "Audit", href: "/services/audit" },
        { label: "Expertise comptable", href: "/services/expertise-comptable"},
        { label: "Conseil financier", href: "/services/conseil-financier" },
        { label: "Conseil fiscal", href: "/services/conseil-fiscal"},
        { label: "Conseil en risques", href: "/services/conseil-en-risques" },
        { label: "Conseil opérationnel", href: "/services/conseil-operationnel" },
        {
          label: "Expertise sectorielle",
          href: "/services/expertise-sectorielle",
        },
      ],
    },
    {
      label: "Actualités",
      href: "/actualites",
    },
    {
      label: "Contact",
      href: "#",
      children: [{ label: "Nous trouver", href: "/contact/nous-trouver" }],
    },
    {
      label: "Rejoignez-nous",
      href: "#",
      children: [
        { label: "Carrières", href: "/rejoignez-nous/carrieres" },
        { label: "Candidature spontanée", href: "/rejoignez-nous/candidature" },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#073E5D] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6">
              <div className="flex items-center text-sm">
                <Phone size={14} className="mr-2" />
                <span>+225 27 22 23 05 26</span>
              </div>
              <div className="hidden md:flex items-center text-sm">
                <Mail size={14} className="mr-2" />
                <span>contact@y3audit.com</span>
              </div>
              <div className="hidden lg:flex items-center text-sm">
                <MapPin size={14} className="mr-2" />
                <span>cocody Riviera Golf Mafit - Appt 103 Immeuble Tiga</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80C342]" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn("bg-white transition-all duration-300", scrolled ? "py-2 shadow-md" : "py-4")}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="relative w-40 h-16">
                  <Image
                    src="/logo-y3.png"
                    alt="Y3 Audit & Conseils"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <ImprovedDropdown key={item.label} item={item} />
              ))}
              <Link
                href="/contact/rendez-vous"
                className="bg-[#80C342] hover:bg-gray-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
              >
                Prendre un rendez-vous
              </Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-[#073E5D] hover:text-[#80C342]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-3 border-b border-gray-100 last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-[#073E5D] font-semibold text-lg py-2"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === item.label ? "transform rotate-180" : "",
                        )}
                      />
                    </button>

                    {activeDropdown === item.label && item.children && (
                      <div className="mt-3 ml-4 border-l-2 border-[#80C342] pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-gray-700 hover:text-[#80C342] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-[#073E5D] font-semibold text-lg py-2 hover:text-[#80C342] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/contact/rendez-vous"
                className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Prendre un rendez-vous
              </Link>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone size={14} className="mr-2 text-[#073E5D]" />
                  <span>+225 27 22 23 05 26</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail size={14} className="mr-2 text-[#073E5D]" />
                  <span>contact@y3audit.com</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-2 text-[#073E5D]" />
                  <span>cocody Riviera Golf Mafit - Appt 103 Immeuble Tiga</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-[#073E5D] hover:text-[#80C342]" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

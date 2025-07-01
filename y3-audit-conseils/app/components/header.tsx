"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export function Header() {
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
        { label: "Expertise comptable", href: "/services/expertise-comptable" },
        { label: "Conseil financier", href: "/services/conseil-financier" },
        { label: "Conseil fiscal", href: "/services/conseil-fiscal" },
        { label: "Conseil opérationnel", href: "/services/conseil-operationnel" },
      ],
    },
    {
      label: "Contact",
      href: "#",
      children: [
        { label: "Nous trouver", href: "/contact/nous-trouver" },
        { label: "Demande de devis", href: "/contact/demande-de-devis" },
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

  const closeDropdown = () => {
    setActiveDropdown(null)
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
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="hidden md:flex items-center text-sm">
                <Mail size={14} className="mr-2" />
                <span>contact@y3audit.fr</span>
              </div>
              <div className="hidden lg:flex items-center text-sm">
                <MapPin size={14} className="mr-2" />
                <span>123 Avenue des Champs-Élysées, Paris</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-[#80C342]" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-white hover:text-[#80C342]" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-white hover:text-[#80C342]" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn("bg-white transition-all duration-300", scrolled ? "py-2 shadow-md" : "py-4")}>
        <div className="container mx-auto px-1 xs:px-2 sm:px-3 ms:px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-y3.png"
                alt="Y3 Audit & Conseils"
                width={200}
                height={70}
                className={cn(
                  "transition-all duration-300 h-auto",
                  scrolled
                    ? "h-8 max-w-[60px] xs:h-10 xs:max-w-[80px] sm:h-12 sm:max-w-[100px] ms:h-12 ms:max-w-[120px] md:h-14 md:max-w-[140px] lg:h-16 lg:max-w-[180px]"
                    : "h-10 max-w-[80px] xs:h-12 xs:max-w-[100px] sm:h-14 sm:max-w-[120px] ms:h-14 ms:max-w-[140px] md:h-16 md:max-w-[180px] lg:h-20 lg:max-w-[220px]"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(item.label)}
                  onMouseLeave={() => setTimeout(() => closeDropdown(), 100)}
                >
                  <button
                    className="flex items-center text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>

                  {activeDropdown === item.label && item.children && (
                    <div
                      className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10"
                      onMouseEnter={() => toggleDropdown(item.label)}
                      onMouseLeave={() => closeDropdown()}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#80C342]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact/rendez-vous"
                className="bg-[#80C342] hover:bg-[#073E5D] text-white px-5 py-2 rounded-md transition-colors duration-300"
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-[#073E5D] font-medium"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.label ? "transform rotate-180" : "",
                    )}
                  />
                </button>

                {activeDropdown === item.label && item.children && (
                  <div className="mt-2 ml-4 border-l-2 border-[#80C342] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-gray-700 hover:text-[#80C342]"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/contact/rendez-vous"
                className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-5 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Prendre un rendez-vous
              </Link>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone size={14} className="mr-2 text-[#073E5D]" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail size={14} className="mr-2 text-[#073E5D]" />
                  <span>contact@y3audit.fr</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-2 text-[#073E5D]" />
                  <span>123 Avenue des Champs-Élysées, Paris</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <a href="#" className="text-[#073E5D] hover:text-[#80C342]" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-[#073E5D] hover:text-[#80C342]" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-[#073E5D] hover:text-[#80C342]" aria-label="LinkedIn">
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

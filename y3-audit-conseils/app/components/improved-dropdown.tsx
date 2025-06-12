"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface DropdownProps {
  item: NavItem
}

// Modifier la fonction ImprovedDropdown pour améliorer la gestion du survol
export function ImprovedDropdown({ item }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Ferme le menu déroulant lorsque l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      // Nettoyer le timeout lors du démontage
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    // Annuler tout timeout de fermeture en cours
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Ajouter un délai avant de fermer le menu
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setActiveSubmenu(null)
    }, 300) // 300ms de délai avant fermeture
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setActiveSubmenu(null)
    }
  }

  const handleSubmenuMouseEnter = (label: string) => {
    setActiveSubmenu(label)
  }

  const handleSubmenuMouseLeave = () => {
    // Ne pas fermer immédiatement le sous-menu
    // Le sous-menu se fermera lorsque le menu principal se fermera
  }

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {item.children ? (
      <button
        className="flex items-center text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={cn("ml-1 transition-transform duration-200", isOpen ? "transform rotate-180" : "")}
        />
      </button>
      ) : (
        <Link
          href={item.href}
          className="flex items-center text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
        >
          {item.label}
        </Link>
      )}

      {isOpen && item.children && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
          {item.children.map((child) => (
            <div
              key={child.label}
              className="relative"
              onMouseEnter={() => handleSubmenuMouseEnter(child.label)}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              {child.children ? (
                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#80C342] cursor-pointer">
                  <span>{child.label}</span>
                  <ChevronRight size={14} />

                  {activeSubmenu === child.label && (
                    <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg py-1 z-20 -ml-1">
                      {child.children.map((subChild) => (
                        <Link
                          key={subChild.label}
                          href={subChild.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#80C342]"
                          onClick={() => {
                            setIsOpen(false)
                            setActiveSubmenu(null)
                          }}
                        >
                          {subChild.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#80C342]"
                  onClick={() => setIsOpen(false)}
                >
                  {child.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

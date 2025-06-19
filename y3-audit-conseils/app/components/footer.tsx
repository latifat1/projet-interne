import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Linkedin, ChevronRight } from "lucide-react"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#073E5D] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* À propos */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image src="/logo-y3.png" alt="Y3 Audit & Conseils" width={400} height={160} className="h-24 sm:h-32 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Cabinet d'expertise comptable, d'audit et de conseil dédié à l'accompagnement des entreprises dans leur
              développement.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/y3-audit-conseils/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#80C342] transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/a-propos/notre-histoire"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos/notre-equipe"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos/notre-vision-et-certifications"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Notre vision et certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/audit"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/comptabilite"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Comptabilité
                </Link>
              </li>
              <li>
                <Link
                  href="/services/conseil-financier"
                  className="text-gray-300 hover:text-[#80C342] transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Conseil financier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#80C342] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Cocody Rieviera Golf Mafit - Appt 103 immeuble Tiga</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#80C342]" />
                <span className="text-gray-300">+225 27 22 23 05 26</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#80C342]" />
                <span className="text-gray-300">contact@y3audit.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-[#80C342]" />
                <span className="text-gray-300">Lun - Ven: 8h - 18h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils.
            </p>
            <form
              action="https://gmail.us7.list-manage.com/subscribe/post?u=564210c912175ad3e644784c4&id=a26ea5c286&f_id=002ea8e4f0"
              method="POST"
              target="_blank"
              className="space-y-2"
            >
              <div>
                <input
                  type="email"
                  name="EMAIL"
                  required
                  placeholder="Votre email"
                  className="w-full px-3 py-2 bg-[#0A4E73] border border-[#1A6A95] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80C342]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#80C342] hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

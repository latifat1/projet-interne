import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Linkedin, ChevronRight } from "lucide-react"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#073E5D] text-white w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 xs:gap-4 sm:gap-8 ms:gap-12 lg:gap-16">
          {/* Contact */}
          <div className="lg:col-start-2 lg:col-span-6">
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3">
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
          <div className="lg:col-span-4">
            <h3 className="text-xs xs:text-sm sm:text-base font-semibold mb-3">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-xs xs:text-sm sm:text-base">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils.
            </p>
            <div className="max-w-sm">
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
                    className="w-full px-1 xs:px-2 py-1.5 sm:px-3 bg-[#0A4E73] border border-[#1A6A95] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80C342] text-xs xs:text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#80C342] hover:bg-gray-700 text-white py-1.5 px-1 xs:px-2 sm:px-4 rounded-md transition-colors text-xs xs:text-sm sm:text-base"
                >
                  S'inscrire
                </button>
              </form>
            </div>
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/company/y3-audit-conseils/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#80C342] transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

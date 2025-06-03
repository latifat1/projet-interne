"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SloganBanner() {
  return (
    <section className="bg-gradient-to-r from-[#073E5D] to-[#0A5275] py-10 md:py-14 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-[#80C342] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-56 md:h-56 bg-[#80C342] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Votre réussite, <span className="text-[#80C342]">notre expertise</span>
            </h2>
            <p className="text-gray-200 mt-2 md:mt-3 max-w-2xl">
              Des solutions d'audit et de conseil sur mesure pour accompagner votre entreprise dans sa croissance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact/rendez-vous"
              className="inline-flex items-center bg-[#80C342] hover:bg-gray-700 text-white hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

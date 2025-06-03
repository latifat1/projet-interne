"use client"

import { useState } from "react"
import { Calendar } from "@/app/components/calendar"
import { AppointmentForm } from "@/app/components/appointment-form"
import { FadeInWhenVisible } from "@/app/components/animations"

export default function RendezVousPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Prendre un rendez-vous</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Sélectionnez une date et une heure qui vous conviennent, puis remplissez le formulaire pour confirmer votre
            rendez-vous avec l'un de nos experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FadeInWhenVisible>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Choisissez votre créneau</h2>
              <Calendar
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Vos informations</h2>
              <AppointmentForm selectedDate={selectedDate} selectedTime={selectedTime} />
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">
            Comment se déroule un rendez-vous ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">1. Prise de contact</div>
              <p className="text-gray-700">
                Nous vous contactons pour confirmer votre rendez-vous et préciser vos besoins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">2. Consultation</div>
              <p className="text-gray-700">
                Nous échangeons sur votre situation et identifions les solutions adaptées à vos besoins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">3. Proposition</div>
              <p className="text-gray-700">Nous vous envoyons une proposition détaillée adaptée à votre situation.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Clock, CheckCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NousTrouverPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.objet) {
      newErrors.objet = "Le sujet est requis"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          subject: formData.objet,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        alert(data.error || "Une erreur est survenue lors de l'envoi.")
      }
    } catch (error) {
      alert("Erreur réseau ou serveur. Veuillez réessayer plus tard.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects = [
    { value: "", label: "Sélectionnez un sujet" },
    { value: "audit", label: "Audit" },
    { value: "expertise-comptable", label: "Expertise comptable" },
    { value: "conseil-fiscal", label: "Conseil fiscal" },
    { value: "conseil-en-gestion", label: "Conseil en gestion" },
    { value: "autre", label: "Autre" },
  ]

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nous trouver</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Contactez-nous pour toute question ou demande d'information. Notre équipe est à votre disposition pour vous
            accompagner dans vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Carte et coordonnées */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Nos coordonnées</h2>

            {/* Carte statique */}
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.078150849655!2d-3.970157214013181!3d5.3373524371642755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edf8d6fb7533%3A0xa6cc83ac235fb341!2sY3%20Audit%20et%20Conseils!5e0!3m2!1sfr!2sci!4v1749816029717!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.app.goo.gl/4FZHdb9vVnozbRi86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#80C342] text-white px-4 py-2 rounded-md hover:bg-[#073E5D] transition-colors flex items-center gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Obtenir l'itinéraire
                </a>
              </div>
            </div>

            {/* Coordonnées complètes */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-2 mr-3 mt-0.5">
                  <MapPin className="h-5 w-5 text-[#073E5D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Adresse</h3>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://maps.app.goo.gl/4FZHdb9vVnozbRi86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#80C342] transition-colors"
                    >
                      M'Badon, Avenue Jean Malan, Abidjan
                    </a>
                    <p className="text-sm text-gray-500">
                      Cliquez sur l'adresse pour voir la localisation exacte sur Google Maps
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-2 mr-3 mt-0.5">
                  <Phone className="h-5 w-5 text-[#073E5D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Téléphone</h3>
                  <p className="text-gray-700">+225 27 22 23 05 26</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-2 mr-3 mt-0.5">
                  <Mail className="h-5 w-5 text-[#073E5D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Email</h3>
                  <p className="text-gray-700">contact@ycubeac.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-2 mr-3 mt-0.5">
                  <Clock className="h-5 w-5 text-[#073E5D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Horaires d'ouverture</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div>Lundi - Vendredi</div>
                    <div>8h00 - 18h00</div>
                    <div>Samedi - Dimanche</div>
                    <div>Fermé</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Formulaire de contact</h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#073E5D] mb-2">Message envoyé</h3>
                <p className="text-gray-600 text-center">
                  Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className={cn(
                        "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                        errors.nom ? "border-red-500" : "border-gray-300",
                      )}
                    />
                    {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={cn(
                        "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                        errors.email ? "border-red-500" : "border-gray-300",
                      )}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
                    />
                  </div>

                  <div>
                    <label htmlFor="objet" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      id="objet"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                        errors.objet ? "border-red-500" : "border-gray-300",
                      )}
                    >
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                    {errors.objet && <p className="mt-1 text-sm text-red-500">{errors.objet}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                      errors.message ? "border-red-500" : "border-gray-300",
                    )}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-[#80C342] text-white py-3 px-6 rounded-md font-medium transition-colors",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-700",
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer"
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4">* Champs obligatoires</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

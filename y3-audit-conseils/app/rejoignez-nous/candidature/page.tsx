"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Upload, CheckCircle, Loader2, FileText, User, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeInWhenVisible } from "@/app/components/animations"

export default function CandidaturePage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    poste: "",
    lettreMotivation: "",
    cv: null as File | null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
      // Clear error when field is edited
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis"
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.poste.trim()) {
      newErrors.poste = "Le poste recherché est requis"
    }

    if (!formData.cv) {
      newErrors.cv = "Le CV est requis"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 1500)
    }
  }

  if (isSubmitted) {
    return (
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="rounded-full bg-green-100 p-4 mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-[#073E5D] mb-4">Candidature envoyée avec succès</h3>
              <p className="text-gray-600 text-center mb-6 max-w-md">
                Nous avons bien reçu votre candidature. Notre équipe RH l'examinera dans les plus brefs délais et vous
                contactera si votre profil correspond à nos besoins.
              </p>
              <div className="w-16 h-1 bg-[#80C342] mx-auto"></div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Candidature Spontanée</h1>
              <div className="w-20 h-1 bg-[#80C342] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vous souhaitez rejoindre notre équipe ? Envoyez-nous votre candidature spontanée en remplissant le
                formulaire ci-dessous.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Sidebar avec informations */}
                <div className="bg-[#073E5D] text-white p-8 lg:p-10">
                  <h2 className="text-xl font-semibold mb-6">Rejoignez notre équipe</h2>
                  <p className="mb-8 text-gray-200">
                    Nous sommes constamment à la recherche de talents pour renforcer nos équipes et accompagner notre
                    développement.
                  </p>

                  <h3 className="text-lg font-medium mb-4 text-[#80C342]">Pourquoi nous rejoindre ?</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Projets variés et stimulants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Formation continue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Évolution de carrière</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ambiance conviviale</span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/team-working-together.png"
                        alt="Notre équipe"
                        fill
                        className="object-cover opacity-80"
                      />
                    </div>
                  </div>
                </div>

                {/* Formulaire */}
                <div className="col-span-2 p-8 lg:p-10">
                  <h2 className="text-xl font-semibold text-[#073E5D] mb-6">Votre candidature</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className={cn(
                              "w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                              errors.nom ? "border-red-500" : "border-gray-300",
                            )}
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
                      </div>

                      <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className={cn(
                              "w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                              errors.prenom ? "border-red-500" : "border-gray-300",
                            )}
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn(
                              "w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                              errors.email ? "border-red-500" : "border-gray-300",
                            )}
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="poste" className="block text-sm font-medium text-gray-700 mb-1">
                        Poste recherché *
                      </label>
                      <select
                        id="poste"
                        name="poste"
                        value={formData.poste}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
                          errors.poste ? "border-red-500" : "border-gray-300",
                        )}
                      >
                        <option value="">Sélectionnez un poste</option>
                        <option value="Expert-comptable">Expert-comptable</option>
                        <option value="Auditeur junior">Auditeur junior</option>
                        <option value="Auditeur senior">Auditeur senior</option>
                        <option value="Consultant junior">Consultant junior</option>
                        <option value="Consultant senior">Consultant senior</option>
                        <option value="Fiscaliste">Fiscaliste</option>
                        <option value="Collaborateur comptable">Collaborateur comptable</option>
                        <option value="Chef de mission">Chef de mission</option>
                        <option value="Responsable paie">Responsable paie</option>
                        <option value="Contrôleur de gestion">Contrôleur de gestion</option>
                        <option value="Analyste financier">Analyste financier</option>
                        <option value="Juriste">Juriste</option>
                        <option value="Assistant administratif">Assistant administratif</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {errors.poste && <p className="mt-1 text-sm text-red-500">{errors.poste}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                          CV (format PDF) *
                        </label>
                        <div
                          className={cn(
                            "border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors",
                            errors.cv ? "border-red-500" : "border-gray-300",
                          )}
                        >
                          <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <label htmlFor="cv" className="cursor-pointer block">
                            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">
                              {formData.cv ? formData.cv.name : "Choisir un fichier"}
                            </p>
                          </label>
                        </div>
                        {errors.cv && <p className="mt-1 text-sm text-red-500">{errors.cv}</p>}
                      </div>

                      <div>
                        <label htmlFor="lettreMotivation" className="block text-sm font-medium text-gray-700 mb-1">
                          Lettre de motivation
                        </label>
                        <div className="relative">
                          <textarea
                            id="lettreMotivation"
                            name="lettreMotivation"
                            rows={6}
                            value={formData.lettreMotivation}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
                            placeholder="Rédigez votre lettre de motivation..."
                          />
                          <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-[#80C342] text-white py-3 px-6 rounded-md font-medium transition-colors",
                          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#073E5D]",
                        )}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            Envoi en cours...
                          </span>
                        ) : (
                          "Envoyer ma candidature"
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">* Champs obligatoires</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </main>
  )
}

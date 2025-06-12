// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Check, Loader2 } from "lucide-react"
// import { cn } from "@/lib/utils"

// interface AppointmentFormProps {
//   selectedDate: Date | undefined
//   selectedTime: string | undefined
// }

// export function AppointmentForm({ selectedDate, selectedTime }: AppointmentFormProps) {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev }
//         delete newErrors[name]
//         return newErrors
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "Le prénom est requis"
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Le nom est requis"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "L'email est requis"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Format d'email invalide"
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Le téléphone est requis"
//     }

//     if (!formData.subject) {
//       newErrors.subject = "Le sujet est requis"
//     }

//     if (!selectedDate) {
//       newErrors.date = "Veuillez sélectionner une date"
//     }

//     if (!selectedTime) {
//       newErrors.time = "Veuillez sélectionner une heure"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (validateForm()) {
//       setIsSubmitting(true)

//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitting(false)
//         setIsSubmitted(true)

//         // Redirect after successful submission
//         setTimeout(() => {
//           router.push("/contact/rendez-vous/confirmation")
//         }, 2000)
//       }, 1500)
//     }
//   }

//   const subjects = [
//     { value: "", label: "Sélectionnez un sujet" },
//     { value: "audit", label: "Audit" },
//     { value: "expertise-comptable", label: "Expertise comptable" },
//     { value: "conseil-fiscal", label: "Conseil fiscal" },
//     { value: "conseil-en-gestion", label: "Conseil en gestion" },
//     { value: "autre", label: "Autre" },
//   ]

//   if (isSubmitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-8">
//         <div className="rounded-full bg-green-100 p-3 mb-4">
//           <Check className="h-8 w-8 text-green-600" />
//         </div>
//         <h3 className="text-xl font-semibold text-[#073E5D] mb-2">Rendez-vous demandé</h3>
//         <p className="text-gray-600 text-center">
//           Votre demande de rendez-vous a été envoyée avec succès. Vous allez être redirigé...
//         </p>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {(!selectedDate || !selectedTime) && (
//         <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4">
//           <p className="text-amber-800 text-sm">
//             {!selectedDate
//               ? "Veuillez sélectionner une date pour votre rendez-vous."
//               : "Veuillez sélectionner une heure pour votre rendez-vous."}
//           </p>
//         </div>
//       )}

//       {selectedDate && selectedTime && (
//         <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
//           <p className="text-green-800 text-sm">
//             Rendez-vous prévu le{" "}
//             {selectedDate.toLocaleDateString("fr-FR", {
//               weekday: "long",
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//             })}{" "}
//             à {selectedTime}
//           </p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//             Prénom *
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className={cn(
//               "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
//               errors.firstName ? "border-red-500" : "border-gray-300",
//             )}
//           />
//           {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
//         </div>

//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//             Nom *
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className={cn(
//               "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
//               errors.lastName ? "border-red-500" : "border-gray-300",
//             )}
//           />
//           {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email *
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={cn(
//               "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
//               errors.email ? "border-red-500" : "border-gray-300",
//             )}
//           />
//           {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//             Téléphone *
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className={cn(
//               "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
//               errors.phone ? "border-red-500" : "border-gray-300",
//             )}
//           />
//           {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
//         </div>
//       </div>

//       <div>
//         <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//           Entreprise
//         </label>
//         <input
//           type="text"
//           id="company"
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
//         />
//       </div>

//       <div>
//         <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//           Sujet du rendez-vous *
//         </label>
//         <select
//           id="subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className={cn(
//             "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
//             errors.subject ? "border-red-500" : "border-gray-300",
//           )}
//         >
//           {subjects.map((subject) => (
//             <option key={subject.value} value={subject.value}>
//               {subject.label}
//             </option>
//           ))}
//         </select>
//         {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
//           placeholder="Précisez l'objet de votre rendez-vous..."
//         />
//       </div>

//       <div className="pt-4">
//         <button
//           type="submit"
//           disabled={isSubmitting || !selectedDate || !selectedTime}
//           className={cn(
//             "w-full bg-[#80C342] text-white py-3 px-6 rounded-md font-medium transition-colors",
//             isSubmitting || !selectedDate || !selectedTime ? "opacity-70 cursor-not-allowed" : "hover:bg-[#073E5D]",
//           )}
//         >
//           {isSubmitting ? (
//             <span className="flex items-center justify-center">
//               <Loader2 className="animate-spin mr-2 h-5 w-5" />
//               Envoi en cours...
//             </span>
//           ) : (
//             "Confirmer le rendez-vous"
//           )}
//         </button>
//       </div>

//       <p className="text-xs text-gray-500 mt-4">* Champs obligatoires</p>
//     </form>
//   )
// }
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppointmentFormProps {
  selectedDate: Date | undefined
  selectedTime: string | undefined
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovwvjlr" // Remplace par ton URL Formspree

export function AppointmentForm({ selectedDate, selectedTime }: AppointmentFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis"
    }

    if (!formData.subject) {
      newErrors.subject = "Le sujet est requis"
    }

    if (!selectedDate) {
      newErrors.date = "Veuillez sélectionner une date"
    }

    if (!selectedTime) {
      newErrors.time = "Veuillez sélectionner une heure"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          date: selectedDate?.toISOString() ?? "",
          time: selectedTime ?? "",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setIsSubmitting(false)

        setTimeout(() => {
          router.push("/contact/rendez-vous/confirmation")
        }, 2000)
      } else {
        setIsSubmitting(false)
        alert(data.error || "Une erreur est survenue lors de l'envoi.")
      }
    } catch (error) {
      setIsSubmitting(false)
      alert("Erreur réseau ou serveur. Veuillez réessayer plus tard.")
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

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#073E5D] mb-2">Rendez-vous demandé</h3>
        <p className="text-gray-600 text-center">
          Votre demande de rendez-vous a été envoyée avec succès. Vous allez être redirigé...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {(!selectedDate || !selectedTime) && (
        <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4">
          <p className="text-amber-800 text-sm">
            {!selectedDate
              ? "Veuillez sélectionner une date pour votre rendez-vous."
              : "Veuillez sélectionner une heure pour votre rendez-vous."}
          </p>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
          <p className="text-green-800 text-sm">
            Rendez-vous prévu le{" "}
            {selectedDate.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            à {selectedTime}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.firstName ? "border-red-500" : "border-gray-300",
            )}
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.lastName ? "border-red-500" : "border-gray-300",
            )}
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className={cn(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.email ? "border-red-500" : "border-gray-300",
            )}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.phone ? "border-red-500" : "border-gray-300",
            )}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Entreprise
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet du rendez-vous *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
            errors.subject ? "border-red-500" : "border-gray-300",
          )}
        >
          {subjects.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !selectedDate || !selectedTime}
        className={cn(
          "w-full inline-flex items-center justify-center rounded-md bg-[#80C342] px-4 py-2 text-white font-semibold hover:bg-[#6aa32b] focus:outline-none focus:ring-2 focus:ring-[#548623] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600",
          isSubmitting ? "opacity-75" : ""
        )}
      >
        {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        Prendre rendez-vous
      </button>
    </form>
  )
}

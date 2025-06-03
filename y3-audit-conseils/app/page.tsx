import dynamic from "next/dynamic"

// Import statique des composants moins lourds
import { ActionFields } from "./components/action-fields"
import { CompanyHistory } from "./components/company-history"
import { HumanCentered } from "./components/human-centered"

// Import dynamique des composants plus lourds
const MainSlider = dynamic(() => import("./components/main-slider").then((mod) => mod.MainSlider), {
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">Chargement du slider...</div>
  ),
})

const MainServices = dynamic(() => import("./components/main-services").then((mod) => mod.MainServices), {
  loading: () => (
    <div className="w-full py-12 bg-gray-50 flex items-center justify-center">Chargement des services...</div>
  ),
})

const PartnersCarousel = dynamic(() => import("./components/partners-carousel").then((mod) => mod.PartnersCarousel), {
  loading: () => (
    <div className="w-full py-8 bg-gray-50 flex items-center justify-center">Chargement des partenaires...</div>
  ),
})

export default function Home() {
  return (
    <main>
      <MainSlider />
      <MainServices />
      <ActionFields />
      <CompanyHistory />
      <HumanCentered />
      <PartnersCarousel />
    </main>
  )
}

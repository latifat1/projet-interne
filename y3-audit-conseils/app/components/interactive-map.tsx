"use client"

import dynamic from "next/dynamic"
import type { LatLngExpression } from "leaflet"

// Import dynamique du composant de carte
const MapComponent = dynamic(() => import("./map-component").then(mod => mod.MapComponent), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center h-full">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  ),
})

interface InteractiveMapProps {
  center: LatLngExpression
  zoom: number
  markerPosition?: LatLngExpression
  popupText?: string
  height?: string
}

export default function InteractiveMap(props: InteractiveMapProps) {
  return <MapComponent {...props} />
}

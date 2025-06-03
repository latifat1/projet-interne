"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix pour les icônes Leaflet dans Next.js
const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

interface InteractiveMapProps {
  center: [number, number]
  zoom?: number
  markerPosition?: [number, number]
  popupText?: string
  height?: string
}

export default function InteractiveMap({
  center = [5.3484, -4.0042], // Abidjan par défaut
  zoom = 15,
  markerPosition,
  popupText = "Y3 Audit & Conseils",
  height = "300px",
}: InteractiveMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center" style={{ height }}>
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    )
  }

  return (
    <div style={{ height, width: "100%" }} className="rounded-lg overflow-hidden">
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
          <Marker position={markerPosition || center}>
            <Popup>{popupText}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

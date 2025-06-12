"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import type { LatLngExpression, Icon } from "leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapWithNoSSRProps {
  center: LatLngExpression
  zoom: number
  markerPosition?: LatLngExpression
  popupText?: string
  height?: string
}

// Configuration de l'icône par défaut
const DefaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Configuration des types pour les props des composants
interface MapContainerProps {
  center: LatLngExpression
  zoom: number
  style: React.CSSProperties
  scrollWheelZoom: boolean
  children?: React.ReactNode
}

interface TileLayerProps {
  attribution: string
  url: string
}

interface MarkerProps {
  position: LatLngExpression
  children?: React.ReactNode
}

interface PopupProps {
  children: React.ReactNode
}

export default function MapWithNoSSR({ center, zoom, markerPosition, popupText, height = "100%" }: MapWithNoSSRProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Configuration de l'icône par défaut pour tous les marqueurs
    const markerIcon = DefaultIcon as Icon
    // @ts-ignore - Les types de Leaflet ne sont pas correctement résolus pour Marker.prototype.options
    L.Marker.prototype.options.icon = markerIcon
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center" style={{ height }}>
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    )
  }

  const mapContainerProps: MapContainerProps = {
    center,
    zoom,
    style: { height: "100%", width: "100%" },
    scrollWheelZoom: false,
  }

  const tileLayerProps: TileLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  }

  const renderMarker = () => {
    if (!markerPosition) return null

    const markerProps: MarkerProps = {
      position: markerPosition,
    }

    if (popupText) {
      const popupProps: PopupProps = {
        children: popupText,
      }
      return (
        <Marker {...markerProps}>
          <Popup {...popupProps} />
        </Marker>
      )
    }

    return <Marker {...markerProps} />
  }

  return (
    <div style={{ height, width: "100%" }}>
      <MapContainer {...mapContainerProps}>
        <TileLayer {...tileLayerProps} />
        {renderMarker()}
      </MapContainer>
    </div>
  )
} 
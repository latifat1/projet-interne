"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import type { LatLngExpression } from "leaflet"

// Import dynamique de react-leaflet
const MapWithNoSSR = dynamic(
  () => import("./map-with-no-ssr"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center h-full">
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    ),
  }
)

interface MapComponentProps {
  center: LatLngExpression
  zoom: number
  markerPosition?: LatLngExpression
  popupText?: string
  height?: string
}

export function MapComponent(props: MapComponentProps) {
  return (
    <div className="h-full w-full" style={{ height: props.height || "100%" }}>
      <MapWithNoSSR {...props} />
    </div>
  )
} 
declare module 'leaflet' {
  export interface LatLngExpression {
    lat: number;
    lng: number;
  }

  export interface IconOptions {
    iconUrl: string;
    iconRetinaUrl?: string;
    shadowUrl?: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
    popupAnchor?: [number, number];
    shadowSize?: [number, number];
  }

  export class Icon {
    constructor(options: IconOptions);
  }

  export class Marker {
    static prototype: {
      options: {
        icon: Icon;
      };
    };
  }
} 
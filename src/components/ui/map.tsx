"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type LocationData = {
  position: [number, number];
  value: number;
  name?: string;
};

export default function HeatMap({ 
  locations, 
  center = [51.505, -0.09], 
  zoom = 13 
}: { 
  locations: LocationData[]; 
  center?: [number, number]; 
  zoom?: number;
}) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  const maxValue = Math.max(...locations.map(loc => loc.value));
  
  const getRadius = (value: number) => {
    return 5 + (value / maxValue * 25); 
  };
  
  const getOpacity = (value: number) => {
    return 0.5 + (value / maxValue * 0.5); 
  };

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={true}
      className="h-64 w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((location, idx) => (
        <CircleMarker
          key={idx}
          center={location.position}
          radius={getRadius(location.value)}
          pathOptions={{
            fillColor: "#3792F9",
            fillOpacity: getOpacity(location.value),
            color: "#3792F9",
            weight: 1
          }}
        >
          <Popup>
            {location.name || `Location ${idx + 1}`}
            <br />
            Value: {location.value}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
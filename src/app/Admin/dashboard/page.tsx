'use client'

import dynamic from 'next/dynamic'
import { Component } from "../../../components/ui/pieChart"
import TotalSales from "../../../components/ui/totalSales"
import { Prediction } from "../../../components/ui/Prediction"
// Use dynamic import for the map component to avoid SSR issues
const HeatMap = dynamic(() => import('../../../components/ui/map'), {
  ssr: false,
})

export default function Dashboard() {
  // Sample sales data by location for the heatmap
  // Each location has coordinates and a sales value
  const salesLocations = [
    { position: [36.75, 3.06] as [number , number], value: 8500, name: "Algiers Center" },
    { position: [36.76, 3.05] as [number , number], value: 6200, name: "Bab El Oued" },
    { position: [36.74, 3.07] as [number , number], value: 7400, name: "Sidi M'Hamed" },
    { position: [36.73, 3.09] as [number , number], value: 4800, name: "El Madania" },
    { position: [36.77, 3.04] as [number , number], value: 5600, name: "Bab Ezzouar" },
    { position: [36.72, 3.05] as [number , number], value: 2700, name: "El Harrach" },
  ];

  return (
    <div className="w-[97%]">
      <div className="bg-[#F6F7F9] w-[96%] mx-auto p-2 flex justify-between">
        <TotalSales />
        <Component />
      </div>

      <div className="bg-[#F6F7F9] w-[96%] mx-auto p-2 flex gap-x-4 justify-between">
        <div className="w-[40%]">
          <Prediction />
        </div>
        
        {/* Replace the simple map with our heat map component */}
        <div className="w-[60%]">
          <HeatMap
            locations={salesLocations}
            center={[36.75, 3.06]}
            zoom={13}
          />
        </div>
      </div>
    </div>
  )
}
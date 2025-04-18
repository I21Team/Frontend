"use client" 

import { TrendingUp } from "lucide-react" 
import { CartesianGrid, LabelList, Line, LineChart } from "recharts" 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card" 
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart" 

const chartData = [ 
  { product: "product1", sales: 275, fill: "#4285F4" }, 
  { product: "product2", sales: 200, fill: "#34A853" }, 
  { product: "product3", sales: 187, fill: "#FF9900" }, 
  { product: "product4", sales: 173, fill: "#0078D7" }, 
  { product: "other", sales: 90, fill: "#9AA0A6" }, 
] 

const chartConfig = { 
  sales: { label: "sales", color: "#6366F1" }, 
  product1: { label: "product1", color: "#4285F4" }, 
  product2: { label: "product2", color: "#34A853" }, 
  product3: { label: "product3", color: "#FF9900" }, 
  product4: { label: "product4", color: "#0078D7" }, 
  other: { label: "Other", color: "#9AA0A6" }, 
} satisfies ChartConfig 

const getPerdiod=()=>
{
  return "January - June 2024"
}
export function Prediction() { 
  return ( 
    <Card> 
      <CardHeader> 
        <CardTitle>Predictions</CardTitle> 
        <CardDescription>{getPerdiod()}</CardDescription> 
      </CardHeader> 
      <CardContent> 
        <ChartContainer config={chartConfig}> 
          <LineChart 
            accessibilityLayer 
            data={chartData} 
            margin={{ top: 24, left: 24, right: 24 }} 
          > 
            <CartesianGrid vertical={false} /> 
            <ChartTooltip 
              cursor={false} 
              content={ 
                <ChartTooltipContent 
                  indicator="line" 
                  nameKey="sales" 
                  hideLabel 
                /> 
              } 
            /> 
            <Line 
              dataKey="sales" 
              type="natural" 
              stroke="#6366F1" 
              strokeWidth={2} 
              dot={{ fill: "#6366F1" }} 
              activeDot={{ r: 6 }} 
            > 
              <LabelList 
                position="top" 
                offset={12} 
                className="fill-foreground" 
                fontSize={12} 
                dataKey="product" 
                formatter={(value: keyof typeof chartConfig) => 
                  chartConfig[value]?.label 
                } 
              /> 
            </Line> 
          </LineChart> 
        </ChartContainer> 
      </CardContent> 
      <CardFooter className="flex-col items-start gap-2 text-sm"> 
        <div className="flex gap-2 font-medium leading-none"> 
          Trending up by 5.2% this month 
          <TrendingUp className="h-4 w-4" /> 
        </div> 
       
      </CardFooter> 
    </Card> 
  ) 
}
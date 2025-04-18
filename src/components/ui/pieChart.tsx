"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { Product: "Product1", sales: 275, fill: "#4285F4" }, // Blue
  { Product: "Product2", sales: 200, fill: "#FF9800" }, // Orange
  { Product: "Product3", sales: 187, fill: "#FF5722" }, // Deep orange
  { Product: "Product4", sales: 173, fill: "#00BCD4" }, // Cyan
  { Product: "other", sales: 90, fill: "#9E9E9E" }, // Grey
]

const chartConfig = {
  sales: {
    label: "sales",
  },
  Product1: {
    label: "Product1",
    color: "#4285F4",
  },
  Product2: {
    label: "Product2",
    color: "#FF9800",
  },
  Product3: {
    label: "Product3",
    color: "#FF5722",
  },
  Product4: {
    label: "Product4",
    color: "#00BCD4",
  },
  other: {
    label: "Other",
    color: "#9E9E9E",
  },
} satisfies ChartConfig


export function Component() {
  return (
    <Card className="flex flex-col mx-auto w-[25vw] rounded-[8px] mr-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-[#003049] text-2xl">Top products</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="sales" hideLabel />}
            />
            <Pie data={chartData} dataKey="sales">
              <LabelList
                dataKey="Product"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
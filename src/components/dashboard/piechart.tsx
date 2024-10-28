"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#4285F4" },
  { browser: "safari", visitors: 200, fill: "#FF6D00"},
  { browser: "firefox", visitors: 287, fill: "#FFBB33"},
  { browser: "edge", visitors: 173, fill: "#0078D7"},
  { browser: "other", visitors: 190, fill: "#34A853"},
];

export function Piechart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (

    <div className="">
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square max-w-[250px]">
          <PieChart width={250} height={250}>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={80} 
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </div>
      </CardContent>
      </div>
  );
}

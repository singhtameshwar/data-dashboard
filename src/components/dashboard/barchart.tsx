"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#4285F4",
  },
};

export const Content1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-3">
          <div className="bg-grey border h-full flex-grow rounded-lg p-4">
            <h2>Check the beat, guys!</h2>
            <p>Dabang</p>
          </div>
          <div className="bg-grey border h-full flex-grow rounded-lg p-4">
            <h2>Check the beat, guys!</h2>
            <p>Dabang</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-grey border h-full flex-grow rounded-lg p-4">
            <h2>Check the beat, guys!</h2>
            <p>Dabang</p>
          </div>
          <div className="bg-grey border h-full flex-grow rounded-lg p-4">
            <h2>Check the beat, guys!</h2>
            <p>Dabang</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-grey border rounded-lg p-4 flex justify-center">
          <BarChart width={250} height={250} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Bar dataKey="desktop" fill="#4285F4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

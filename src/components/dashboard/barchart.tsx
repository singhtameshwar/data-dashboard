"use client";
import { TrendingUp, DollarSign, ArrowRight } from "lucide-react"; // Importing the ArrowRight icon
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:gap-8">
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:shadow-xl">
          <div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Total Sales</h2>
            </div>
            <div className="stats mt-4">
              <div className="stat  p-4 rounded-lg shadow-sm">
                <div className="stat-title text-gray-600">Downloads</div>
                <div className="stat-value text-lg font-bold">31K</div>
                <div className="stat-desc text-sm text-green-600">Jan 1st - Feb 1st</div>
              </div>
            </div>
          </div>

          <button className="mt-4 flex items-center text-blue-500 hover:underline">
            Read More <ArrowRight className="ml-1" />
          </button>
        </div>

        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:shadow-xl">
          <div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Total Sales</h2>
            </div>
            <div className="stats mt-4">
              <div className="stat  p-4 rounded-lg shadow-sm">
                <div className="stat-title text-gray-600">New Users</div>
                <div className="stat-value text-lg font-bold">4,200</div>
                <div className="stat-desc text-sm text-green-600">↗︎ 400 (22%)</div>
              </div>
            </div>
          </div>

          <button className="mt-4 flex items-center text-blue-500 hover:underline">
            Read More <ArrowRight className="ml-1" />
          </button>
        </div>

        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:shadow-xl">
          <div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Total Sales</h2>
            </div>
            <div className="stats mt-4">
              <div className="stat  p-4 rounded-lg shadow-sm">
                <div className="stat-title text-gray-600">New Registers</div>
                <div className="stat-value text-lg font-bold">1,200</div>
                <div className="stat-desc text-sm text-red-600">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
          <button className="mt-4 flex items-center text-blue-500 hover:underline">
            Read More <ArrowRight className="ml-1" />
          </button>
        </div>

        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:shadow-xl">
          <div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Total Sales</h2>
            </div>
            <div className="stats mt-4">
              <div className="stat p-4 rounded-lg shadow-sm">
                <div className="stat-title text-gray-600">New Registers</div>
                <div className="stat-value text-lg font-bold">1,200</div>
                <div className="stat-desc text-sm text-red-600">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
          <button className="mt-4 flex items-center text-blue-500 hover:underline">
            Read More <ArrowRight className="ml-1" />
          </button>
        </div>
      </div>


      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex justify-center items-center h-full lg:h-[550px] lg:col-span-2">
        <BarChart width={300} height={250} data={chartData}>
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
  );
};
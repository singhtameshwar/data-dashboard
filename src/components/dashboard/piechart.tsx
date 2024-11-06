"use client";

import * as React from "react";
import { Badge, ChevronDown } from "lucide-react";
import { Label, Pie, PieChart, Tooltip } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#4285F4" },
  { browser: "safari", visitors: 200, fill: "#FF6D00" },
  { browser: "firefox", visitors: 287, fill: "#FFBB33" },
  { browser: "edge", visitors: 173, fill: "#0078D7" },
  { browser: "other", visitors: 190, fill: "#34A853" },
];

export function Piechart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <>
      <div id="parent" className="flex flex-wrap gap-4 p-4 sm:p-6">
        <Card className="w-full sm:w-[48%] ">
          <div className="rounded-lg shadow-md p-4 sm:p-6 mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-md sm:text-lg font-semibold">Recent Activity</h2>
              <Button variant="ghost" className="flex items-center space-x-1">
                Last 24h <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="text-gray-500 border-b border-gray-300">
                  <th className="py-2">Customer</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Retained</th>5
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="flex items-center py-4 space-x-3">
                    <img
                      src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                      alt="profile"
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Ronald Richards</p>
                      <p className="text-xs sm:text-sm text-gray-400">ronalrcs@mail.com</p>
                    </div>
                  </td>
                  <td><Badge color="red">Member</Badge></td>
                  <td className="text-gray-400">5 min ago</td>
                  <td className="font-semibold text-gray-400">$12,408.20</td>
                </tr>

                <tr className="border-b border-gray-300">
                  <td className="flex items-center py-4 space-x-3">
                    <img
                      src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4380.jpg"
                      alt="profile"
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Darrell Steward</p>
                      <p className="text-xs sm:text-sm text-gray-400">steward.darell@mail.com</p>
                    </div>
                  </td>
                  <td><Badge color="orange">Signed Up</Badge></td>
                  <td className="text-gray-400">10 min ago</td>
                  <td className="font-semibold text-gray-400">$201.50</td>
                </tr>

                <tr>
                  <td className="flex items-center py-4 space-x-3">
                    <img
                      src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4381.jpg"
                      alt="profile"
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Marvin McKinney</p>
                      <p className="text-xs sm:text-sm text-gray-400">mckinney.jr@mail.com</p>
                    </div>
                  </td>
                  <td><Badge color="green">New Customer</Badge></td>
                  <td className="text-gray-400">15 min ago</td>
                  <td className="font-semibold text-gray-400">$2,856.03</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        <div id="second" className="flex w-full sm:w-[48%] items-center justify-center">
          <CardContent className="flex bg-white border rounded-lg shadow-md items-center justify-center p-4 sm:p-6">
            <div className="aspect-square w-[200px] sm:w-[250px]">
              <PieChart width={200} height={200}>
                <Tooltip />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={50}
                  outerRadius={70}
                  strokeWidth={4}
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
                              className="fill-foreground text-xl sm:text-3xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-muted-foreground text-sm sm:text-base"
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
      </div>
    </>
  );
}

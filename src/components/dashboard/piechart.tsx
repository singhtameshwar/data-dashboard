"use client";

import * as React from "react";
import { Badge, ChevronDown, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
      <div id="parent" className="flex flex-wrap gap-2 p-4 pl-10">
        <Card>
          <div className="rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Button variant="ghost" className="flex items-center space-x-1">
                Last 24h <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="py-2">Customer</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Retained</th>
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="flex items-center py-4 space-x-3">
                    <img
                      src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                      alt="profile"
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Ronald Richards</p>
                      <p className="text-sm text-gray-400">ronalrcs@mail.com</p>
                    </div>
                  </td>
                  <td><Badge color="red">Member</Badge></td>
                  <td className="text-gray-400">5 min ago</td>
                  <td className="font-semibold text-gray-400">$12,408.20</td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="flex items-center py-4 space-x-3">
                    <img
                      src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4380.jpg"
                      alt="profile"
                      className="rounded-full w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Darrell Steward</p>
                      <p className="text-sm text-gray-400">steward.darell@mail.com</p>
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
                      <p className="text-sm text-gray-400">mckinney.jr@mail.com</p>
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
        <div id="second" className="flex flex-1 items-center justify-center">
          <CardContent className="flex bg-white border rounded-lg shadow-md items-center justify-center">
            <div className="aspect-square max-w-[250px]">
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
      </div>
    </>
  );
}
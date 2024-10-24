"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { BadgeCent } from "lucide-react";

interface Appointment {
  AppointmentID: number;
  PatientID: number;
  DoctorID: number;
  AppointmentDate: string;
  Status: string;
  DurationMinutes: number;
  Cost: number;
}

const appointmentData: Appointment[] = [
  {
    AppointmentID: 1,
    PatientID: 101,
    DoctorID: 201,
    AppointmentDate: "2024-10-14",
    Status: "Confirmed",
    DurationMinutes: 30,
    Cost: 150.0,
  },
  {
    AppointmentID: 2,
    PatientID: 102,
    DoctorID: 202,
    AppointmentDate: "2024-10-15",
    Status: "Pending",
    DurationMinutes: 45,
    Cost: 200.0,
  },
  {
    AppointmentID: 3,
    PatientID: 103,
    DoctorID: 203,
    AppointmentDate: "2024-10-16",
    Status: "Confirmed",
    DurationMinutes: 60,
    Cost: 250.0,
  },
  {
    AppointmentID: 4,
    PatientID: 104,
    DoctorID: 204,
    AppointmentDate: "2024-10-17",
    Status: "Cancelled",
    DurationMinutes: 30,
    Cost: 0.0,
  },
];

export const Content1 = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const margin = { top: 40, right: 20, bottom: 80, left: 60 };
    const width = 1200 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand<string>()
      .domain(appointmentData.map((d) => d.AppointmentDate))
      .range([0, width])
      .padding(0.05);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(appointmentData, (d: Appointment) => d.Cost) || 0])
      .range([height, 0]);

    const bars = svg
      .selectAll<SVGRectElement, Appointment>("rect")
      .data(appointmentData)
      .enter()
      .append("rect")
      .attr("x", (d: Appointment) => xScale(d.AppointmentDate) || 0)
      .attr("y", height)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", "#08c922")
      .transition()
      .duration(800)
      .attr("y", (d: Appointment) => yScale(d.Cost))
      .attr("height", (d: Appointment) => height - yScale(d.Cost))
      .ease(d3.easeBounce);

    svg
      .selectAll<SVGTextElement, Appointment>("text.bar-label")
      .data(appointmentData)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr(
        "x",
        (d: Appointment) => (xScale(d.AppointmentDate) || 0) + xScale.bandwidth() / 2
      )
      .attr("y", (d: Appointment) => yScale(d.Cost) - 5)
      .attr("text-anchor", "middle")
      .text((d: Appointment) => d.DurationMinutes)
      .style("fill", "black")
      .style("font-size", "20px");

    const xAxis = d3.axisBottom(xScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.5em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-45)")
      .style("font-size", "12px")
      .style("fill", "#333");

    svg.append("g").call(d3.axisLeft(yScale));

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 60)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("fill", "black");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("x", -height / 2)
      .attr("text-anchor", "middle")
      .text("Cost ($)")
      .style("font-size", "20px")
      .style("fill", "black");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -10)
      .attr("text-anchor", "middle")
      .text("Appointment Costs Overview")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "black");
  }, []);

  return (
    <div className="py-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-3">
            <div className="bg-grey border h-40 rounded-lg p-4">
              <h2>Check the beat, guys!</h2>
              <p>Dabang</p>
            </div>
            <div className="bg-grey border h-40 rounded-lg p-4">
              <h2>Check the beat, guys!</h2>
              <p>Dabang</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-grey border h-40 rounded-lg p-4">
              <h2>Check the beat, guys!</h2>
              <p>Dabang</p>
            </div>
            <div className="bg-grey border h-40 rounded-lg p-4">
              <h2>Check the beat, guys!</h2>
              <p>Dabang</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-grey border rounded-lg p-4">
            <div className="mt-4">
              <svg ref={chartRef} className="w-full h-auto"></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

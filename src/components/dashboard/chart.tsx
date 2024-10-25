"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";

interface Appointment {
  AppointmentID: number;
  PatientID: number;
  DoctorID: number;
  Status: string;
  Cost: number; 
}

interface AppointmentCategory {
  category: string;
  value: number;
  appointments: Appointment[]; 
}

interface TableData {
  category: string;
  percentage: number;
  color: string;
  appointments: Appointment[]; 
}

export const Chart8 = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [tooltipData, setTooltipData] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const appointmentData = useMemo(
    () => [
      { AppointmentID: 1, PatientID: 101, DoctorID: 201, Status: "Confirmed", Cost: 150 },
      { AppointmentID: 2, PatientID: 102, DoctorID: 202, Status: "Pending", Cost: 200 },
      { AppointmentID: 2, PatientID: 102, DoctorID: 202, Status: "Pending", Cost: 200 },
      { AppointmentID: 2, PatientID: 102, DoctorID: 202, Status: "Pending", Cost: 200 },
   
    ],
    []
  );

  const data: AppointmentCategory[] = useMemo(() => {
    const categoryCounts: Record<string, { value: number; appointments: Appointment[] }> = {};
    appointmentData.forEach((appointment) => {
      if (!categoryCounts[appointment.Status]) {
        categoryCounts[appointment.Status] = { value: 0, appointments: [] };
      }
      categoryCounts[appointment.Status].value++;
      categoryCounts[appointment.Status].appointments.push(appointment);
    });

    return Object.keys(categoryCounts).map((category) => ({
      category,
      value: categoryCounts[category].value,
      appointments: categoryCounts[category].appointments,
    }));
  }, [appointmentData]);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 40, 800);
      const height = (width * 600) / 800;
      setDimensions({ width, height });
    };

    let resizeTimeout: NodeJS.Timeout;

    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const margin = { top: 20, right: 30, bottom: 20, left: 30 };
    const radius = Math.min(width, height) / 2 - 50;

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.category))
      .range(["#ff6384", "#36a2eb", "#ffcd56"]);

    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
      )
      .append("g")
      .attr(
        "transform",
        `translate(${(width + margin.left + margin.right) / 2}, ${(height + margin.top + margin.bottom) / 2})`
      );

    svg.selectAll("*").remove();

    const pie = d3
      .pie<AppointmentCategory>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<AppointmentCategory>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.9);

    const outerArc = d3
      .arc<d3.PieArcDatum<AppointmentCategory>>()
      .innerRadius(radius * 0.95)
      .outerRadius(radius * 0.95);

    const pieData = pie(data);

    svg
      .selectAll("path")
      .data(pieData)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.category) as string)
      .attr("stroke", "#fff")
      .attr("stroke-width", "2px")
      .on("mousemove", (event, d) => {
        const [x, y] = d3.pointer(event);
        const appointments = d.data.appointments.map(app => 
          `ID: ${app.AppointmentID}`
        ).join(", ");
        setTooltipData(`Status: ${d.data.category}, Appointments: ${appointments}`);
        setTooltipPos({ x, y });
      })
      .on("mouseout", () => {
        setTooltipData(null);
        setTooltipPos(null);
      });

    svg
      .selectAll("text")
      .data(pieData)
      .join("text")
      .attr("dy", ".35em")
      .attr("font-size", "16px")
      .attr("fill", "#666")
      .text((d) => d.data.category)
      .attr("transform", function (d) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1.4 : -1.4);
        return `translate(${pos})`;
      })
      .style("text-anchor", (d) => (midAngle(d) < Math.PI ? "start" : "end"));

    svg
      .selectAll("polyline")
      .data(pieData)
      .join("polyline")
      .attr("points", function (d) {
        const posA = arc.centroid(d);
        const posB = outerArc.centroid(d);
        const posC = [...outerArc.centroid(d)];
        posC[0] = radius * (midAngle(d) < Math.PI ? 1.4 : -1.4);
        return [posA, posB, posC].map((point) => point.join(",")).join(" ");
      })
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", "1.5px");

    function midAngle(d: d3.PieArcDatum<AppointmentCategory>) {
      return (d.startAngle + d.endAngle) / 2;
    }

    const totalValue = data.reduce((sum, d) => sum + d.value, 0);
    const newTableData: TableData[] = data.map((d) => ({
      category: d.category,
      percentage: (d.value / totalValue) * 100,
      color: color(d.category) as string,
      appointments: d.appointments,
    }));
    setTableData(newTableData);
  }, [data, dimensions]);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-base-200 p-4">
      <div className="relative flex flex-col w-full max-w-5xl" style={{ minHeight: '700px', paddingTop: '50px', paddingBottom: '30px', marginBottom: '40px' }}>
        <svg ref={chartRef} style={{ marginBottom: '30px' }}></svg>
      </div>
      {tooltipData && tooltipPos && (
        <div
          className="absolute bg-gray-700 text-white p-2 rounded"
          style={{ left: tooltipPos.x + 10, top: tooltipPos.y }}
        >
          {tooltipData}
        </div>
      )}
    </div>
  );
};

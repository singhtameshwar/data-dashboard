"use client";

import React, { useEffect, useRef, useMemo } from "react";
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

export const Content2 = () => {
    const chartRef = useRef<SVGSVGElement | null>(null);

    const appointmentData = useMemo(
        () => [
            { AppointmentID: 1, PatientID: 101, DoctorID: 201, Status: "Confirmed", Cost: 150 },
            { AppointmentID: 2, PatientID: 102, DoctorID: 202, Status: "Pending", Cost: 200 },
            { AppointmentID: 3, PatientID: 102, DoctorID: 202, Status: "Pending", Cost: 200 },
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
        const { width, height } = { width: 300, height: 300 };
        const radius = Math.min(width, height) / 2 - 50;

        const color = d3
            .scaleOrdinal<string>()
            .domain(data.map((d) => d.category))
            .range(["#ff6384", "#36a2eb", "#ffcd56"]);

        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();

        const g = svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie<AppointmentCategory>().value((d) => d.value).sort(null);
        const arc = d3.arc<d3.PieArcDatum<AppointmentCategory>>().innerRadius(radius * 0.5).outerRadius(radius * 0.9);

        g.selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", (d) => color(d.data.category) as string)
            .attr("stroke", "#fff")
            .attr("stroke-width", "2px");

        g.selectAll("text")
            .data(pie(data))
            .join("text")
            .attr("transform", (d) => {
                const [x, y] = arc.centroid(d);
                const offsetX = x * 1.3; 
                const offsetY = y * 1.3;
                return `translate(${offsetX}, ${offsetY})`;
            })
            .attr("text-anchor", "middle")
            .attr("font-size", "12px")
            .attr("fill", "#000")
            .style("font-weight", "bold")
            .text((d) => `${d.data.category}: ${d.data.value}`);

    }, [data]);

    return (
            <div className="grid grid-cols-1 h-[400px] md:grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                    <div className="bg-white border rounded-lg p-4 flex justify-center items-center h-2/3 w-full">
                        <div>
                            <svg ref={chartRef}></svg>
                        </div>
                    </div>
                </div>
            </div>
    );
};

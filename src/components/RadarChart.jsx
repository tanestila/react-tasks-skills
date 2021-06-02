import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 80,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 98,
    fullMark: 100,
  },
  {
    subject: "English",
    A: 10,
    B: 10,
    fullMark: 100,
  },
  {
    subject: "Geography",
    A: 80,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Physics",
    A: 20,
    B: 50,
    fullMark: 100,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 100,
  },
];

export function Chart() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

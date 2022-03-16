import React, { useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useRecoilState } from "recoil";
import { categoryListState, todoListState } from "../state";

export function Chart() {
  const [categories, setCategories] = useRecoilState(categoryListState);
  const [todos, setTodos] = useRecoilState(todoListState);

  const dataSet = categories.reduce((obj, item) => {
    return { ...obj, [item.text]: 0 };
  }, {});

  useEffect(() => {
    todos.forEach((item) => {
      if (item.complete) {
        dataSet[item.category] += 1;
      }
    });
  }, [todos]);

  console.log(dataSet);

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={dataSet}
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

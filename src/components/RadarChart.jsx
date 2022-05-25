import React, { useEffect } from "react";
import { useState } from "react";
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

  const [dataset, setDataset] = useState({});

  useEffect(() => {
    const set = categories.reduce(
      (arr, item) => {
        return [...arr, { id: item.id, x: 0, name: item.text }];
      },
      [{ null: 0 }]
    );
    console.log(set);

    todos.forEach((item) => {
      console.log(item.category);
      if (item.complete) {
        let i = set.findIndex((value) => value.id === item.category);
        if (i) set[i].x += 1;
        console.log(set);
      }
    });
    setDataset(set);
  }, [todos]);

  console.log(dataset);

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={dataset}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="x"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

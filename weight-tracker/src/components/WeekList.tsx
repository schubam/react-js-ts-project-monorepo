import React from "react";

const data = [
  { date: 1593941963658, weight: 123.9 },
  { date: 1593950540708, weight: 123.5 },
  { date: 1593924717174, weight: 123.8 },
];

interface Props {}

const WeekList = (props: Props) => {
  return (
    <ul>
      {data.map((w) => (
        <li>{w.weight}</li>
      ))}
    </ul>
  );
};

export default WeekList;

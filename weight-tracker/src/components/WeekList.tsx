import React from "react";
import { withWeekAndDay } from "./weight";
import DayItem from "./DayItem";

const data = [
  { date: 1593941963658, weight: 123.9 },
  { date: 1593950540708, weight: 123.5 },
  { date: 1593924717174, weight: 123.8 },
];

interface Props {
  week: number;
  highlight?: boolean;
}

const WeekList = ({ week, highlight }: Props) => {
  return (
    <>
      <h2
        style={highlight ? { color: "red" } : { color: "black" }}
      >{`Week ${week}`}</h2>
      <ul>
        {data.map(withWeekAndDay).map((w) => (
          <DayItem data={w} />
        ))}
      </ul>
    </>
  );
};

export default WeekList;

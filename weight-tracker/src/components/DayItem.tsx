import React from "react";

interface Props {
  data: {
    weight: number;
    week: number;
    day: number;
  };
}

const DayItem = ({ data }: Props) => {
  return (
    <li>
      {data.weight} | {data.week} | {data.day}
    </li>
  );
};

export default DayItem;

import { weeknumber } from "./weeknumber";

interface WeightAtDate {
  date: number;
  weight: number;
}

interface SortableWeightAtDate extends WeightAtDate {
  week: number;
  day: number;
}

export function withWeekAndDay(weight: WeightAtDate): SortableWeightAtDate {
  const date = new Date(weight.date);
  const week = weeknumber(date);
  const day = date.getDay();
  return Object.assign({}, weight, { week, day });
}



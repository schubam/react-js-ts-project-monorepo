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

// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-24.php
function weeknumber(dt: Date) {
  var tdt = new Date(dt.valueOf());
  var dayn = (dt.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000);
}

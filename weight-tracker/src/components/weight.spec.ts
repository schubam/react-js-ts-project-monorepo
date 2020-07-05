import { withWeekAndDay } from "./weight";

const SUNDAY = 0;

it("converts date into day, month, year", () => {
  const date = Date.parse("2020-07-05T09:39:23.658Z");
  const weight = 123.9;
  const weightAtDate = { date, weight };
  expect(withWeekAndDay(weightAtDate)).toStrictEqual({
    weight,
    date,
    week: 27,
    day: SUNDAY,
  });
});

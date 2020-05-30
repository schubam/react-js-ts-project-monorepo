import { Comp } from "./types";

const comps: Comp[] = [
  { id: "1", title: "Comp1" },
  { id: "2", title: "Comp2" },
  { id: "3", title: "Comp3" },
  { id: "4", title: "Comp4" },
];

export function findById(id: string): Comp {
  return comps.filter((c) => c.id === id)[0];
}

export function findAll(): Comp[] {
  return comps;
}

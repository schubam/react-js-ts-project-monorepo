import { Comp } from "../components/types";

const comps: Comp[] = [
  {
    id: "1",
    title: "Bomberman",
    earlyGame: ["TFT3_Sona", "TFT3_Ziggs", "TFT3_Malphite"],
    midGame: [
      "TFT3_Sona",
      "TFT3_Ziggs",
      "TFT3_Malphite",
      "TFT3_Jasuo",
      "TFT3_MasterYi",
    ],
    lateGame: [
      "TFT3_Ziggs",
      "TFT3_Sona",
      "TFT3_Jasuo",
      "TFT3_MasterYi",
      "TFT3_Jinx",
      "TFT3_Gangplank",
      "TFT3_MissFortune",
    ],
  },
];

export function findById(id: string): Comp {
  return comps.filter((c) => c.id === id)[0];
}

export function findAll(): Comp[] {
  return comps;
}
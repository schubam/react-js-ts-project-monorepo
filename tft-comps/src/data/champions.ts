import { Champion } from "../components/types";

const champions: Champion[] = require("../assets/set3/champions.json");

export function findAll() {
  return champions;
}

export function findById(id: string) {
  return champions.filter((c) => id === c.championId)[0];
}

export function imageFor(championId: string): string {
  const name = championId.split("_")[1].toLowerCase();
  return `${process.env.PUBLIC_URL}/images/champions/${name}.png`;
}

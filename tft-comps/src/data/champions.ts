import { Champion } from "../components/types";

const champions: Champion[] = require("../assets/set3/champions.json");

export function findAll() {
  return champions;
}

export function findById(id: string) {
  return champions.filter((c) => id === c.championId)[0];
}

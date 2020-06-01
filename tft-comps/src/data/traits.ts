import { Trait } from "../components/types";

const traits: Trait[] = require("../assets/set3/traits.json");

export function findAll() {
  return traits;
}

export function findByName(name: string): Trait {
  return traits.filter((t) => name === t.name)[0];
}

export function imageFor(traitName: string): string {
  const name = traitName.replace(/\s/g, "").toLowerCase();
  return `${process.env.PUBLIC_URL}/images/traits/${name}.png`;
}

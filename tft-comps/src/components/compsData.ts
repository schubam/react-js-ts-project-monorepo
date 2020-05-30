import { Comp, Cost, Trait } from "./types";

const comps: Comp[] = [
  {
    id: "1",
    title: "Bomberman",
    earlyGame: {
      slot1: {
        name: "Sona",
        cost: Cost.Two,
        traits: [Trait.Mystic, Trait.Rebel],
      },
      slot2: {
        name: "Ziggs",
        cost: Cost.One,
        traits: [Trait.Demolitionist, Trait.Rebel],
      },
      slot3: {
        name: "Malphite",
        cost: Cost.One,
        traits: [Trait.Brawler, Trait.Rebel],
      },
    },
    midGame: {
      slot1: {
        name: "Sona",
        cost: Cost.Two,
        traits: [Trait.Mystic, Trait.Rebel],
      },
      slot2: {
        name: "Ziggs",
        cost: Cost.One,
        traits: [Trait.Demolitionist, Trait.Rebel],
      },
      slot3: {
        name: "Malphite",
        cost: Cost.One,
        traits: [Trait.Brawler, Trait.Rebel],
      },
      slot4: {
        name: "Yasuo",
        cost: Cost.Two,
        traits: [Trait.Blademaster, Trait.Rebel],
      },
      slot5: {
        name: "Master Yi",
        cost: Cost.Three,
        traits: [Trait.Blademaster, Trait.Rebel],
      },
    },
    lateGame: {
      slot1: {
        name: "Ziggs",
        cost: Cost.One,
        traits: [Trait.Demolitionist, Trait.Rebel],
      },
      slot2: {
        name: "Sona",
        cost: Cost.Two,
        traits: [Trait.Mystic, Trait.Rebel],
      },
      slot3: {
        name: "Yasuo",
        cost: Cost.Two,
        traits: [Trait.Blademaster, Trait.Rebel],
      },
      slot4: {
        name: "Master Yi",
        cost: Cost.Three,
        traits: [Trait.Blademaster, Trait.Rebel],
      },
      slot5: {
        name: "Jinx",
        cost: Cost.Four,
        traits: [Trait.Blaster, Trait.Rebel],
      },
      slot6: {
        name: "Aurelion Sol",
        cost: Cost.Five,
        traits: [Trait.Starship, Trait.Rebel],
      },
      slot7: {
        name: "Gangplank",
        cost: Cost.Five,
        traits: [Trait.Mercenary, Trait.Demolitionist, Trait.SpacePirate],
      },
      slot8: {
        name: "Miss Fortune",
        cost: Cost.Five,
        traits: [Trait.Mercenary, Trait.Blaster, Trait.Valkyries],
      },
    },
  },
];

export function findById(id: string): Comp {
  return comps.filter((c) => c.id === id)[0];
}

export function findAll(): Comp[] {
  return comps;
}

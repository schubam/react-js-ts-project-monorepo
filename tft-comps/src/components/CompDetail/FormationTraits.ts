import { Champion } from "../types";
import { findById } from "../../data/champions";

class FormationTraits {
  formation: string[];
  champions: Champion[];

  constructor(formation: string[]) {
    this.formation = formation;
    this.champions = formation.map((id) => findById(id));
  }

  findByChampionId(id: string): string[] {
    const c = this.champions.filter((c) => c.championId === id)[0];
    if (c) {
      return c.traits;
    } else {
      return [];
    }
  }

  counts() {
    const value: TraitsTally[] = [];
    return this.champions
      .map((c) => c.traits)
      .flat()
      .reduce((memo, trait) => {
        const idx = memo.findIndex((e) => e.trait === trait);
        if (idx < 0) {
          const item = { trait, count: 1 };
          memo.push(item);
        } else {
          memo[idx].count += 1;
        }
        return memo;
      }, value);
  }
}

interface TraitsTally {
  count: number;
  trait: string;
}

// [
//   {
//       "count": 2,
//       "trait": "blaster"
//     },
//   {
//       "count": 1,
//       "trait": "gunslinger"
//   }
// ]

export default FormationTraits;

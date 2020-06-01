import { Champion } from "../types";
import { findById } from "../../data/champions";
import { findByName } from "../../data/traits";

class FormationTraits {
  formation: string[];
  champions: Champion[];
  counts: Array<TraitsTally>;

  constructor(formation: string[]) {
    this.formation = formation;
    this.champions = formation.map((id) => findById(id));
    this.counts = this.champions
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
      }, Array<TraitsTally>())
      .sort((a, b) => b.count - a.count)
      .filter((t) => {
        const approved = findByName(t.trait)
          .sets.map((set) => set.min)
          .reduce((approved, min) => {
            approved = approved || t.count >= min;
            return approved;
          }, false);
        return approved;
      });
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

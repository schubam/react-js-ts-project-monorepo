import React, { useEffect, useState } from "react";
import { findById } from "../../data/champions";
import { findByName, imageFor } from "../../data/traits";
import styles from "./TraitsSummary.module.css";

interface TraitsTally {
  count: number;
  trait: string;
  image?: string;
  description?: string;
}

function formationTraits(formation: string[]) {
  return formation
    .map((id) => findById(id))
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
    })
    .map((t) => {
      const trait = findByName(t.trait);
      let level;
      trait.sets.forEach((s) => {
        let delta = Infinity;
        if (s.min <= t.count) {
          let newDelta = Math.abs(s.min - t.count);
          if (newDelta < delta) {
            delta = newDelta;
            level = s.style;
          }
        }
      });
      return Object.assign({}, t, {
        image: imageFor(t.trait),
        description: trait.description || trait.innate,
        sets: trait.sets,
        activeStyle: level,
      });
    });
}

interface Props {
  formation: string[]; // champion ids
}

const TraitsSummary = ({ formation }: Props) => {
  const [traits, setTraits] = useState(Array<TraitsTally>());
  useEffect(() => setTraits(formationTraits(formation)), [formation]);

  return (
    <div className={styles.wrapper}>
      {traits.map((o) => (
        <div key={o.trait} className={styles.row}>
          <div className={styles.icon}>
            <img src={o.image} alt={o.trait} />
            <span>{o.count}</span>
            <div>{o.trait}</div>
          </div>
          <div className={styles.description}>{o.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TraitsSummary;

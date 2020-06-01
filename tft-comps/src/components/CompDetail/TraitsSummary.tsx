import React from "react";
import styles from "./TraitsSummary.module.css";
import FormationTraits from "./FormationTraits";

interface Props {
  formation: string[]; // champion ids
}

const TraitsSummary = ({ formation }: Props) => {
  const traits = new FormationTraits(formation);

  return (
    <div className={styles.wrapper}>
      {traits.counts.map((o) => (
        <div key={o.trait} className={styles.row}>
          <div className={styles.icon}>
            <img
              src={`/images/traits/${o.trait.replace(/\s/g, "")}.png`}
              alt={`${o.trait.replace(/\s/g, "")}`}
            />
            <span>{o.count}</span>
            <div>{o.trait}</div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            ratione vel laudantium modi esse qui dicta deleniti, aliquid earum
            fugit molestiae, quia architecto neque est dolore consequuntur culpa
            alias consequatur!
          </div>
        </div>
      ))}
    </div>
  );
};

export default TraitsSummary;

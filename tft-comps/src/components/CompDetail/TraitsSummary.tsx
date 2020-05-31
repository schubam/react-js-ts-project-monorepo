import React, { useEffect, useState } from "react";
import "./TraitsSummary.css";
import { useChampionDetail } from "./useChampionDetail";

interface Props {
  formation: string[]; // champion ids
}

interface IObject {
  [key: string]: any;
}

const TraitsSummary = ({ formation }: Props) => {
  const champions = useChampionDetail(formation);
  const [traits, setTraits] = useState<IObject>({});

  useEffect(() => {
    const defaultValue: IObject = {};
    const traits = champions
      .map((c) => c.traits)
      .flat()
      .reduce((memo, traits: string) => {
        memo[traits] = (memo[traits] || 0) + 1;
        return memo;
      }, defaultValue);
    setTraits(traits);
  }, [champions]);

  return (
    <div className="ts-wrapper">
      {Object.keys(traits).map((trait, index) => (
        <div className="ts-row">
          <div className="ts-icon">
            <img
              src={`/images/traits/${trait.replace(/\s/g, "")}.png`}
              alt={`${trait.replace(/\s/g, "")}`}
            />
            <div>{traits[trait]}</div>
          </div>
          <div className="ts-description">
            {trait}
            <br />
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

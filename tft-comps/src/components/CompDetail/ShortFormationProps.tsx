import React from "react";
import "../../App.css";
import { FormationIconSmall } from "./FormationIcon";
import { useChampionDetail } from "./useChampionDetail";

interface ShortFormationProps {
  title: string;
  championIds: string[];
}

export const ShortFormation = ({ title, championIds }: ShortFormationProps) => {
  const champions = useChampionDetail(championIds);
  return (
    <>
      <h3>{title}</h3>
      <div className={"wrapper-small"}>
        {champions.map((c) => (
          <FormationIconSmall key={c.championId} champion={c} />
        ))}
      </div>
    </>
  );
};

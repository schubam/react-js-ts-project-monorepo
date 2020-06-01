import React from "react";
import { FormationIconSmall } from "./FormationIcon";
import { useChampionDetail } from "./useChampionDetail";

interface ShortFormationProps {
  title: string;
  championIds: string[];
}

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(32, 1fr)",
  marginBottom: "40px",
};

export const ShortFormation = ({ title, championIds }: ShortFormationProps) => {
  const champions = useChampionDetail(championIds);
  return (
    <>
      <h3>{title}</h3>
      <div style={style}>
        {champions.map((c) => (
          <FormationIconSmall key={c.championId} champion={c} />
        ))}
      </div>
    </>
  );
};

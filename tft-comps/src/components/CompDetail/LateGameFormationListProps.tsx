import React from "react";
import "./CompDetail.css";
import { FormationIconSmall } from "./FormationIconSmallProps";

interface LateGameFormationListProps {
  formation: string[];
}

const LateGameFormationList = ({ formation }: LateGameFormationListProps) => {
  return (
    <div className={"wrapper"}>
      {formation.map((championId) => (
        <FormationIconSmall key={championId} championId={championId} />
      ))}
    </div>
  );
};

export default LateGameFormationList;

import React from "react";
import "../../App.css";

import { FormationIconSmall } from "./FormationIconSmallProps";
interface ShortFormationProps {
  title: string;
  championIds: string[];
}
export const ShortFormation = ({ title, championIds }: ShortFormationProps) => (
  <>
    <h3>{title}</h3>
    <ul className={"horizontal small"}>
      {championIds.map((championId) => (
        <FormationIconSmall key={championId} championId={championId} />
      ))}
    </ul>
  </>
);

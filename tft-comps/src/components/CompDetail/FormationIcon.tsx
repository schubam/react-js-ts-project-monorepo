import React from "react";
import "./CompDetail.css";
import { imageFor } from "../../data/champions";
import { Champion } from "../types";

interface FormationIconProps {
  champion: Champion;
}
export const FormationIcon = ({ champion }: FormationIconProps) => (
  <div className={"champion"}>
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
    <div className={"champion-info"}>{champion.name}</div>
  </div>
);

export const FormationIconSmall = ({ champion }: FormationIconProps) => (
  <div className={"champion-small"}>
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
    {/* <div className={"champion-info"}>{champion.name}</div> */}
  </div>
);

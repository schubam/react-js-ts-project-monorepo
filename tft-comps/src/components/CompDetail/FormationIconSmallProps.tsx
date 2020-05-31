import React from "react";
import "./CompDetail.css";
import { imageFor } from "../../data/champions";
interface FormationIconSmallProps {
  championId: string;
}
export const FormationIconSmall = ({ championId }: FormationIconSmallProps) => (
  <div className={"container"}>
    <img className={"image"} src={imageFor(championId)} alt={`${championId}`}/>
    <div className={"centered"}>{championId}</div>
  </div>
);

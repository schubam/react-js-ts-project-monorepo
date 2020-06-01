import React from "react";
import styles from "./CompDetail.module.css";
import { imageFor } from "../../data/champions";
import { Champion } from "../types";

interface FormationIconProps {
  champion: Champion;
}
export const FormationIcon = ({ champion }: FormationIconProps) => (
  <div className={styles.champion}>
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
    <div className={styles.championInfo}>{champion.name}</div>
  </div>
);

export const FormationIconSmall = ({ champion }: FormationIconProps) => (
  <div className={styles.championSmall}>
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
  </div>
);

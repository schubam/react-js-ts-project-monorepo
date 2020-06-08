import React from "react";
import { imageFor } from "../data/champions";
import { Champion } from "./types";
import styles from "./ChampionsListItem.module.css";

interface Props {
  champion: Champion;
  routing?: () => any;
}

const ChampionsListItem = ({ champion, routing }: Props) => (
  <div className={styles.champion} onClick={routing}>
    <div className={styles.grid}>
      <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
      <div className="labelSmall left">{champion.traits}</div>
    </div>
    <div className={styles.label}>{champion.name}</div>
  </div>
);

export default ChampionsListItem;

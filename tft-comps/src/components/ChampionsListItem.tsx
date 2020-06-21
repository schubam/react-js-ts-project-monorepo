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
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
    <div style={{ padding: "8px" }}>
      <div className={styles.large}>{champion.name}</div>
      <div className={styles.small}>{champion.traits.join(" | ")}</div>
    </div>
  </div>
);

export default ChampionsListItem;

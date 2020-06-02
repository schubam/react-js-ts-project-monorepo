import React, { useState, useEffect } from "react";
import { findAll, imageFor } from "../data/champions";

const defaultState: any[] = [];

const ChampionsList = (props: any) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = findAll();
    setData(result);
  }, [data]);

  return (
    <>
      <h2>Champions</h2>
      <div style={{ display: "grid", gap: "5px", margin: "10px" }}>
        {data.map((champion) => (
          <ChampionsListItem
            key={champion.championId}
            champion={champion}
            routing={() =>
              props.history.push(`/champions/${champion.championId}`)
            }
          />
        ))}
      </div>
    </>
  );
};

const ChampionsListItem = ({ champion, routing }: any) => (
  <div style={{ cursor: "pointer" }} onClick={routing}>
    <img src={imageFor(champion.championId)} alt={`${champion.championId}`} />
    <div>{champion.name}</div>
  </div>
);

export default ChampionsList;

import { History } from "history";
import React, { useEffect, useState } from "react";
import ChampionsListItem from "./ChampionsListItem";
import { Champion } from "./types";

const defaultState: Champion[] = [];

interface Props {
  finder: () => Champion[];
  history?: History;
}

const ChampionsList = ({ finder, history }: Props) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = finder();
    setData(result);
  }, [finder]);

  return (
    <>
      <h2>Champions</h2>
      <div style={{ display: "grid", gap: "5px", margin: "10px" }}>
        {data.map((champion) => (
          <ChampionsListItem
            key={champion.championId}
            champion={champion}
            routing={() => history!.push(`/champions/${champion.championId}`)}
          />
        ))}
      </div>
    </>
  );
};

export default ChampionsList;

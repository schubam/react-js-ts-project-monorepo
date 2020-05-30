import React, { useState, useEffect } from "react";
import { findAll } from "../data/champions";
import { Champion } from "./types";

const defaultState: any[] = [];

const ChampionsList = (props: Champion) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = findAll();
    setData(result);
  }, [data]);

  return (
    <>
      <h2>Champions</h2>
      <ul>
        {data.map((champion) => (
          <li>{champion.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ChampionsList;

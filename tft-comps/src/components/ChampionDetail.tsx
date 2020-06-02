import React, { ReactElement, useState, useEffect } from "react";
import { findById, imageFor } from "../data/champions";
import { Champion, Cost, TraitType } from "./types";

interface Props {
  match: {
    params: { id: string };
  };
}

const defaultState: IChampionDetail = {
  name: "",
  championId: "",
  cost: Cost.nothing,
  traits: [TraitType.nothing],
};

interface IChampionDetail extends Champion {
  image?: string;
}
function ChampionDetail(props: Props): ReactElement {
  const id = props.match.params.id;
  const [data, setData] = useState(defaultState);
  useEffect(() => {
    setData(Object.assign({}, findById(id), { image: imageFor(id) }));
  }, [id]);

  return (
    <>
      <div>
        <div>{data.name}</div>
        <img src={data.image} alt={data.name} />
      </div>
    </>
  );
}

export default ChampionDetail;

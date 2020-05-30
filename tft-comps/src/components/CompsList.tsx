import React, { useState, useEffect } from "react";
import CompListItem from "./CompListItem";
import { Comp } from "./types";
import { findAll } from "./comps-data";

interface Props {
  comps: Comp[];
}

const defaultState: any[] = [];

const CompsList = (props: Props) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = findAll();
    setData(result);
  }, []);

  return (
    <>
      <h2>Comps</h2>
      <ul>
        {data.map((comp) => (
          <CompListItem key={comp.id} comp={comp} />
        ))}
      </ul>
    </>
  );
};

export default CompsList;

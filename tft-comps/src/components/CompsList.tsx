import React, { useState, useEffect } from "react";
import CompListItem from "./CompListItem";
import { findAll } from "./compsData";

interface Props {
  comps: {
    id: string;
    title: string;
  };
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

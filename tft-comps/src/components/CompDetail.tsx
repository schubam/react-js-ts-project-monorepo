import React, { useState, useEffect } from "react";
import { Comp } from "./types";
import { findById } from "./comps-data";

interface Props {
  comp: Comp;
  match: {
    params: { id: string };
  };
}

const defaultState: Comp = { id: "", title: "" };

const CompDetail = (props: Props) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = findById(props.match.params.id);
    setData(result);
  }, [props.match.params.id]);

  return (
    <>
      <h2>{data.title}</h2>
      <div>id: {data.id}</div>
    </>
  );
};

export default CompDetail;

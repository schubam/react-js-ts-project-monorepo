import React from "react";
import { Comp } from "./types";
import { Link } from "react-router-dom";

interface Props {
  comp: Comp;
}

const CompsListItem = ({ comp: { id, title } }: Props) => {
  return (
    <li>
      <Link to={`/comps/${id}`}>{title}</Link>
    </li>
  );
};

export default CompsListItem;

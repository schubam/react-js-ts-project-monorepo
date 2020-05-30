import React from "react";
import { Link } from "react-router-dom";

interface Props {
  comp: {
    id: string;
    title: string;
  };
}

const CompsListItem = ({ comp: { id, title } }: Props) => {
  return (
    <li>
      <Link to={`/comps/${id}`}>{title}</Link>
    </li>
  );
};

export default CompsListItem;

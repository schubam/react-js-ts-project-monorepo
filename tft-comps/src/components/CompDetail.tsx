import React, { useEffect, useState } from "react";
import { findById } from "../data/comps";
import { Champion } from "./types";

interface Props {
  match: {
    params: { id: string };
  };
}

interface DetailComp {
  title: string;
  earlyGame: string[];
  midGame: string[];
  lateGame: string[];
}
const defaultState: DetailComp = {
  title: "no title",
  earlyGame: [],
  midGame: [],
  lateGame: [],
};
const CompDetail = (props: Props) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    const result = findById(props.match.params.id);
    setData(result);
  }, [props.match.params.id]);

  return (
    <>
      <h2>{data.title}</h2>
      <LateGameFormationList formation={data.lateGame} />
      <ShortFormation title={"Early Game"} championIds={data.earlyGame} />
      <ShortFormation title={"Mid Game"} championIds={data.midGame} />
    </>
  );
};

interface ShortFormationProps {
  title: string;
  championIds: string[];
}
const ShortFormation = ({ title, championIds }: ShortFormationProps) => (
  <>
    <h3>{title}</h3>
    <ul>
      {championIds.map((championId) => (
        <FormationIconSmall championId={championId} />
      ))}
    </ul>
  </>
);

interface FormationIconSmallProps {
  championId: string;
}
const FormationIconSmall = ({ championId }: FormationIconSmallProps) => (
  <li>{championId}</li>
);

interface LateGameFormationListProps {
  formation: string[];
}
const LateGameFormationList = ({ formation }: LateGameFormationListProps) => {
  return (
    <ul>
      {formation.map((championId) => (
        <FormationIconSmall championId={championId} />
      ))}
    </ul>
  );
};

export default CompDetail;

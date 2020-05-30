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
  earlyGame: object;
  midGame: object;
  lateGame: object;
}
const defaultState: DetailComp = {
  title: "no title",
  earlyGame: {},
  midGame: {},
  lateGame: {},
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

      <h3>Early Game</h3>
      {data.earlyGame && (
        <ul>
          {Object.keys(data.earlyGame).map((key) => {
            // @ts-ignore tslint:disable-next-line
            const c = data.earlyGame[key];
            return <FormationIconSmall champion={c} />;
          })}
        </ul>
      )}

      <h3>Mid Game</h3>
      {data.midGame && (
        <ul>
          {Object.keys(data.midGame).map((key) => {
            // @ts-ignore tslint:disable-next-line
            const c = data.midGame[key];
            return <FormationIconSmall champion={c} />;
          })}
        </ul>
      )}
    </>
  );
};

interface FormationIconSmallProps {
  champion: Champion;
}
const FormationIconSmall = ({ champion }: FormationIconSmallProps) => (
  <li>{champion.name}</li>
);

interface LateGameFormationListProps {
  formation: object;
}
const LateGameFormationList = ({ formation }: LateGameFormationListProps) => {
  return (
    <ul>
      {Object.keys(formation).map((key) => (
        // @ts-ignore tslint:disable-next-line
        <FormationIconSmall champion={formation[key]} />
      ))}
    </ul>
  );
};

export default CompDetail;

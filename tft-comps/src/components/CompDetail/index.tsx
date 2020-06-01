import React, { useEffect, useState } from "react";
import { findById } from "../../data/comps";
import { ShortFormation } from "./ShortFormationProps";
import LateGameFormationList from "./LateGameFormationListProps";
import TraitsSummary from "./TraitsSummary";

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

const defaultCompState: DetailComp = {
  title: "no title",
  earlyGame: [],
  midGame: [],
  lateGame: [],
};

const CompDetail = (props: Props) => {
  const [comp, setComp] = useState(defaultCompState);

  useEffect(() => {
    const result = findById(props.match.params.id);
    setComp(result);
  }, [props.match.params.id]);

  return (
    <>
      <h2>{comp.title}</h2>
      <LateGameFormationList formation={comp.lateGame} />
      <ShortFormation title={"Early Game"} championIds={comp.earlyGame} />
      <ShortFormation title={"Mid Game"} championIds={comp.midGame} />
      <BattlefieldFormation />
      <TraitsSummary formation={comp.lateGame} />
    </>
  );
};

const BattlefieldFormation = () => (
  <div>Placeholder - BattlefieldFormation</div>
);

export default CompDetail;

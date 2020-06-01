import React from "react";
import styles from "./CompDetail.module.css";
import { FormationIcon } from "./FormationIcon";
import { useChampionDetail } from "./useChampionDetail";

interface LateGameFormationListProps {
  formation: string[];
}
const LateGameFormationList = ({ formation }: LateGameFormationListProps) => {
  const champions = useChampionDetail(formation);

  return (
    <div className={styles.wrapper}>
      {champions.map((c) => (
        <FormationIcon key={c.championId} champion={c} />
      ))}
    </div>
  );
};

export default LateGameFormationList;

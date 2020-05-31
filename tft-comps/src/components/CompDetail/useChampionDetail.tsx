import { useEffect, useState } from "react";
import { findById } from "../../data/champions";
import { Champion } from "../types";

export function useChampionDetail(formation: string[]) {
  const [champions, setChampions] = useState<Champion[]>([]);
  useEffect(() => {
    const result = formation.map((id) => findById(id));
    setChampions(result);
  }, [formation]);
  return champions;
}

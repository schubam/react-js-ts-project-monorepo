import React from "react";
import { findAll } from "../data/champions";
import ChampionsList from "./ChampionsList";

export default { title: "Champions List" };

export const fullList = () => <ChampionsList finder={() => findAll().slice(0,5)} />;

import React from "react";
import { findById } from "../data/champions";
import ChampionsListItem from "./ChampionsListItem";

export default { title: "Champions List Item" };

export const item = () => <ChampionsListItem champion={findById("TFT3_Ahri")} />;

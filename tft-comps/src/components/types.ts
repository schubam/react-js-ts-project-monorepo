export enum Cost {
  One = 1,
  Two,
  Three,
  Four,
  Five,
}

export enum TraitType {
  Void = "Void",
  Vanguard = "Vanguard",
  Valkyrie = "Valkyrie",
  Starship = "Starship",
  StarGuardian = "Star Guardian",
  SpacePirate = "Space Pirate",
  Sniper = "Sniper",
  Rebel = "Rebel",
  Protector = "Protector",
  Mystic = "Mystic",
  Mercenary = "Mercenary",
  MechPilot = "MechPilot",
  ManaReaver = "Mana Reaver",
  Infiltrator = "Infiltrator",
  Demolitionist = "Demolitionist",
  DarkStar = "DarkStar",
  Cybernetic = "Cybernetic",
  Chrono = "Chrono",
  Celestial = "Celestial",
  Brawler = "Brawler",
  Blaster = "Blaster",
  Blademaster = "Blademaster",
}

export enum TraitStyle {
  bronze = "bronze",
  silver = "silver",
  gold = "gold",
  chromatic = "chromatic",
}

export interface Trait {
  key: string;
  name: string;
  description: string;
  type: string;
  sets: {
    style: TraitStyle;
    min: number;
    max: number;
  }[];
}

export interface Champion {
  championId: string;
  name: string;
  cost: Cost;
  traits: TraitType[];
}

export interface Loadout {
  championId: string;
  items: Item[];
}

export interface Item {
  id: string;
}

export interface Comp {
  id: string;
  title: string;
  earlyGame: string[];
  midGame: string[];
  lateGame: string[];
  loadouts?: Loadout[];
  effects?: [];
}

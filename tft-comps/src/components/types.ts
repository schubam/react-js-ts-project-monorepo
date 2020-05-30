export enum Cost {
  One = 1,
  Two,
  Three,
  Four,
  Five,
}

export interface Champion {
  name: string;
  cost: Cost;
  traits: Trait[];
}

export enum Trait {
  Void,
  Vanguard,
  Valkyries,
  Starship,
  StarGuardian,
  SpacePirate,
  Sniper,
  Rebel,
  Protector,
  Mystic,
  Mercenary,
  MechPilot,
  ManaReaver,
  Infiltrator,
  Demolitionist,
  DarkStar,
  Cybernetic,
  Chrono,
  Celestial,
  Brawler,
  Blaster,
  Blademaster,
}

export interface EarlyFormation {
  slot1: Champion;
  slot2: Champion;
  slot3: Champion;
}

export interface MidFormation {
  slot1: Champion;
  slot2: Champion;
  slot3: Champion;
  slot4: Champion;
  slot5: Champion;
}

export interface LateFormation {
  slot1: Champion;
  slot2: Champion;
  slot3: Champion;
  slot4: Champion;
  slot5: Champion;
  slot6: Champion;
  slot7: Champion;
  slot8: Champion;
}

export interface Loadout {
  champion: Champion;
  items: Item[];
}

export interface Item {
  id: string;
}

export interface Comp {
  id: string;
  title: string;
  champions?: Champion[];
  loadouts?: Loadout[];
  earlyGame: EarlyFormation;
  midGame: MidFormation;
  lateGame: LateFormation;
  effects?: [];
}

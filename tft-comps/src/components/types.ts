interface Champion {
  title: string;
}

export interface Comp {
  id: string;
  title: string;
  champions?: Champion[];
}

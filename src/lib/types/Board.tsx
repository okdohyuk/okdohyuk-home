export interface BoardsState {
  boards: {
    id: number;
    title: string;
    introduce: string;
    logo: string;
    images: string;
    text: string;
    github: string;
  };
}

export interface Paramtype {
  id: string;
}

export interface BoardState {
  map(
    arg0: ({ id, logo, title, introduce }: BoardS) => JSX.Element,
  ): import('react').ReactNode;
  boards: {
    id: number;
    title: string;
    introduce: string;
    logo: string;
    images: string;
    text: string;
    github: string;
  };
}

export interface BoardS {
  id: number;
  title: string;
  introduce: string;
  logo: string;
  images: string;
  text: string;
  github: string;
}

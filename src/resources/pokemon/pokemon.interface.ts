export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonTypeI = {
  name: string;
  url: string;
};

export type PokemonTypeStore = {
  results: PokemonTypeI[];
  isLoading: boolean;
  setPokemonTypeResults: () => Promise<void>;
};

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
};

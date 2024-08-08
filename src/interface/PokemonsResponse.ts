export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  url: string;
}

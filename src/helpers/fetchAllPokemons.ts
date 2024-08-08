import { pokemonApi } from '@/api/pokemonApi';
import {
  Pokemon,
  PokemonsResponse,
  SmallPokemon,
} from '@/interface/PokemonsResponse';

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  const res = await pokemonApi.get<PokemonsResponse>('/pokemon?limit=2000');

  //console.log(res.data.results);
  return pokemonMapper(res.data.results);
};

const pokemonMapper = (listToTransform: SmallPokemon[]): Pokemon[] => {
  return listToTransform.map((pokemon) => {
    const id = pokemon.url.split('/')[6];
    const name = pokemon.name;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id,
      name,
      url,
    };
  });
};

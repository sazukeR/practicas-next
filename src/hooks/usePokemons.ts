import { fetchAllPokemons } from '@/helpers/fetchAllPokemons';
import { Pokemon } from '@/interface/PokemonsResponse';
import { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchAllPokemons().then((pokemons) => {
      setIsLoading(false);
      setPokemons(pokemons);
    });
  }, []);

  return {
    isLoading,
    pokemons,
  };
};

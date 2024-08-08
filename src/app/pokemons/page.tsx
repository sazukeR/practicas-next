'use client';

import { usePokemons } from '@/hooks/usePokemons';
import { Pokemon } from '@/interface/PokemonsResponse';
import React, { ChangeEvent, useState } from 'react';

const PokemonsPage = () => {
  const [searchInput, setSearchInput] = useState({
    search: '',
  });

  const [currentPage, setCurrentPage] = useState(0);

  const { isLoading, pokemons } = usePokemons();

  const filteredPokemons = (): Pokemon[] => {
    // pagination

    if (searchInput.search.length === 0) {
      return pokemons.slice(currentPage, currentPage + 5);
    }

    const filtered = pokemons.filter((poke) =>
      poke.name.includes(searchInput.search)
    );

    return filtered.slice(currentPage, currentPage + 5);
  };

  const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);

    setSearchInput({
      ...searchInput,
      [target.name]: target.value,
    });
  };

  const handleNext = () => {
    if (
      pokemons.filter((poke) => poke.name.includes(searchInput.search)).length >
      currentPage + 5
    ) {
      setCurrentPage(currentPage + 5);
    }
  };

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 5);
  };

  if (isLoading) {
    return <div>cargando.............</div>;
  }

  return (
    <div>
      <div className="flex flex-col relative overflow-x-auto px-20 justify-center">
        <input
          type="text"
          id="first_name"
          className="flex justify-self-center m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          name="search"
          value={searchInput.search}
          onChange={onSearch}
        />
        <p>{searchInput.search}</p>
        <table className="w-full text-sm text-left max-w-10 rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                IMAGE
              </th>
            </tr>
            {filteredPokemons().map((pokemon) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {pokemon.id}
                </th>
                <td className="px-6 py-4">{pokemon.name}</td>
                <td className="px-6 py-4">
                  <img src={pokemon.url} alt={pokemon.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PokemonsPage;

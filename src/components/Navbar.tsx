'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-around bg-slate-500 w-full">
        <Link
          href={'todos'}
          className="flex p-3 bg-slate-400 rounded-sm text-white font-semibold"
        >
          Todos
        </Link>
        <Link
          href={'pokemons'}
          className="flex p-3 bg-slate-400 rounded-sm text-white font-semibold"
        >
          Pokemons
        </Link>
      </div>
    </nav>
  );
};

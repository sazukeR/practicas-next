import { fetchAllPokemons } from '@/helpers/fetchAllPokemons';

export default async function Home() {
  await fetchAllPokemons();

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

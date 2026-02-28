import PokemonListPage from "@/components/PokemonListPage";

export const metadata = {
  title: "Pokédex - Liste des Pokémon",
};

export default async function HomePage() {
  // Récupération des données côté serveur avec le cache de Next.js
  const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', {
    cache: 'force-cache' 
  });
  const pokemons = await response.json();
  const typesRes = await fetch('https://pokedex-jgabriele.vercel.app/types.json', {
    cache: 'force-cache'
  });
  const typeColors = await typesRes.json()

  return (
    <main style={{ padding: '20px' }}>
      <PokemonListPage initialPokemons={pokemons} typeColors={typeColors} />
    </main>
  );
}
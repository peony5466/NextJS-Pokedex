import PokemonDetail from "@/components/PokemonDetail";
import { Container, Button } from "@mui/material";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { pokemonId } = await params;
  const res = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', {cache:"force-cache"});
  const pokemons = await res.json();
  const pokemon = pokemons.find(p => String(p.id) === pokemonId);

  return {
    title: pokemon ? `Details : ${pokemon.names.en || pokemon.names.fr}` : "Pokémon",
  };
}

export default async function DetailsPage({ params }) {
  const { pokemonId } = await params;
  const [response, typesRes] = await Promise.all([
    fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', { cache: 'force-cache' }),
    fetch('https://pokedex-jgabriele.vercel.app/types.json', { cache: 'force-cache' })
  ]);

  const pokemons = await response.json();
  const typeColors = await typesRes.json();
  const pokemon = pokemons.find(p => String(p.id) === pokemonId);

  if (!pokemon) return <Container>Pokémon introuvable.</Container>;

  return (
    <Container >
      <Link href="/" passHref style={{ textDecoration: 'none' }}>
        <Button variant="outlined" sx={{ mb: 4 }}>← GO BACK</Button>
      </Link>
      <PokemonDetail pokemon={pokemon} typeColors={typeColors}  />
    </Container>
  );
}
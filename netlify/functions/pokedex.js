import fetch from "node-fetch";

export async function handler(event, context) {
  const eventBody = JSON.parse(event.body);
  const POKE_URL = "https://pokeapi.co/api/v2/pokedex/" + eventBody.region;

  const response = await fetch(POKE_URL);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
}

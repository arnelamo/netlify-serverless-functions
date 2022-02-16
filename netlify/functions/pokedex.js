import fetch from "node-fetch";

export async function handler() {
  const POKE_URL = "https://pokeapi.co/api/v2/pokedex/kanto";

  const response = await fetch(POKE_URL);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

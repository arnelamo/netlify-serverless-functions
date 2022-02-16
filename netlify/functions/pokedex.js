import fetch from "node-fetch";

exports.handler = async function () {
  const POKE_URL = "https://pokeapi.co/api/v2/pokedex/kanto";

  const response = await fetch(POKE_URL);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

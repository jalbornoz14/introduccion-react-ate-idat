import { useEffect, useState } from "react";
import { CardPokemon } from "../components/CardPokemon.jsx";

export function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);

  const onSearchPokemon = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Listar pokemones</h1>
      <div>
        {pokemon ? (
          <div>
            {" "}
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="list-pokemon">
        {pokemons.map((e) => (
          <CardPokemon
            name={e.name}
            url={e.url}
            onSearchPokemon={onSearchPokemon}
          />
        ))}
      </div>
    </>
  );
}

import React from "react";
const defaultImages =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const PokemonList = ({ pokemons, selectItem }) => {
  return (
    <div
      id="pokemon-container"
      className="d-inline-block w-auto flex-row flex-wrap"
    >
      {pokemons.results.length > 0 ? (
        pokemons.results.map((pok, index) => (
          <div
            id="pokemon"
            key={index}
            className="card p-2 float-start"
            onClick={() => selectItem(pok.id)}
          >
            <img
              src={pok.imageUrl}
              alt={pok.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImages;
              }}
              className="m-auto"
            />
            <h4 id="pokemon-name" className="m-auto text-capitalize">{pok.name}</h4>
          </div>
        ))
      ) : (
        <h1 className="m-auto text-capitalize">
          No se encontro ningun pokemon
        </h1>
      )}
    </div>
  );
};

export default PokemonList;

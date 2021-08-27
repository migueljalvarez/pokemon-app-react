import React from "react";
import constants from "../helpers/constants";
import { removeOperator } from "../helpers/textHelper";
const { SEARCH_NOT_FOUND, DEFAULT_POKEMON_IMAGES } = constants;

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
                e.target.src = DEFAULT_POKEMON_IMAGES;
              }}
              className="m-auto"
            />
            <h4 id="pokemon-name" className="m-auto text-capitalize">
              {removeOperator(pok.name, "-")}
            </h4>
          </div>
        ))
      ) : (
        <h1 className="m-auto text-capitalize">{SEARCH_NOT_FOUND}</h1>
      )}
    </div>
  );
};

export default PokemonList;

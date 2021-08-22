import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import * as pokemon from "../services/pokemons";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);

  const getData = (offset) => {
    pokemon
      .findAll({ offset })
      .then((data) => {
        const { results, next, previous } = data;
        setTotalItems(data.count);
        setPokemons(results);
        setPreviousPage(previous);
        setNextPage(next);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData(currentOffset);
  }, [currentOffset]);

  const handlePreviousPage = () => {
    setCurrentOffset(currentOffset - 10);
  };

  const handleNextPage = () => {
    setCurrentOffset(currentOffset + 10);
  };

  return (
    <div className="container d-flex flex-column">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {pokemons.map((pok, index) => {
          const pokemonId = pok.url.split("/")[6];
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
          return (
            <div key={index} className="card w-25 mx-4 my-1">
              <img
                src={imageUrl}
                alt={pok.name}
                width="100"
                className="m-auto"
              />
              <h4 className="m-auto text-capitalize">{pok.name}</h4>
            </div>
          );
        })}
      </div>

      <Pagination
        increment={handleNextPage}
        nextPage={nextPage}
        decrement={handlePreviousPage}
        previousPage={previousPage}
      />
    </div>
  );
};

export default Pokemons;

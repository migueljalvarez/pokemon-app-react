import React, { useEffect, useState } from "react";
import PokemonDetails from "../components/PokemonsDetails";
import { currentPokemon, allPokemons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Pokemons = () => {
  const dispatch = useDispatch();
  // const [pokemons, setPokemons] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const { pokemons } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allPokemons(currentOffset, pageLimit));
  }, []);

  const unSelectItem = () => {
    setModalShow(false);
  };
  const selectItem = (id) => {
    dispatch(currentPokemon(id));
    setModalShow(true);
  };

  return (
    <div className="container col-lg-9 col-md-10 col-sm-5  d-flex flex-column">
      <h1>Pokemons</h1>

      <div className="d-flex col-lg-9 col-md-10 col-sm-5 flex-row flex-wrap mx-auto justify-content-center">
        {pokemons.results.map((pok, index) => {
          return (
            <div
              key={index}
              className="card p-2 m-1"
              onClick={() => selectItem(pok.id)}
            >
              <img
                src={pok.imageUrl}
                alt={pok.name}
                width="150"
                height="200"
                className="m-auto"
              />
              <h4 className="m-auto text-capitalize">{pok.name}</h4>
            </div>
          );
        })}
      </div>

      <PokemonDetails show={modalShow} onHide={() => unSelectItem()} />
    </div>
  );
};

export default Pokemons;

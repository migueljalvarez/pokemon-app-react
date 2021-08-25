import React, { useEffect, useState } from "react";
import PokemonDetails from "../components/PokemonsDetails";
import { currentPokemon, allPokemons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import constants from "../helpers/constants";
import { counterPages } from "../helpers/counterPages";

const { POKEMON_TITLE, NEXT, PREV, PAGE } = constants;
const limit = 10;
const Pokemons = () => {
  const dispatch = useDispatch();

  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const { pokemons } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allPokemons(0, limit));
  }, [dispatch]);

  const nextStep = () => {
    let offset = currentOffset + limit;
    setCurrentPage(currentPage + 1);
    setCurrentOffset(offset);
    dispatch(allPokemons(offset, limit, "name", searchTerm));
  };

  const prevStep = () => {
    let offset = currentOffset - limit;
    setCurrentPage(currentPage - 1);
    setCurrentOffset(offset);
    dispatch(allPokemons(offset, limit, "name", searchTerm));
  };

  const unSelectItem = () => {
    setModalShow(false);
  };

  const selectItem = (id) => {
    dispatch(currentPokemon(id));
    setModalShow(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value > 0) dispatch(allPokemons(currentOffset, limit));
  };

  return (
    <div
      id="pokemon-main"
      className="container d-flex flex-column justify-content-center"
    >
      <div className="d-flex justify-content-between">
        <h1>{POKEMON_TITLE}</h1>
        <h3 className=" align-self-center">
          {PAGE}:{" "}
          {counterPages(currentPage, pokemons.currentSearchCount, limit)}
        </h3>
      </div>

      <SearchBar
        filter={allPokemons}
        handleChange={handleSearch}
        searchTerm={searchTerm}
      />
      <div className="my-3">
        <PokemonList pokemons={pokemons} selectItem={selectItem} />
        <PokemonDetails show={modalShow} onHide={() => unSelectItem()} />
      </div>

      <Pagination
        textButtonPrev={PREV}
        textButtonNext={NEXT}
        prev={prevStep}
        next={nextStep}
        prevOnDisabled={currentPage === 1}
        nextOnDisabled={
          currentPage === Math.ceil(pokemons.currentSearchCount / limit)
        }
      />
    </div>
  );
};

export default Pokemons;

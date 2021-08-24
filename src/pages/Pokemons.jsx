import React, { useEffect, useState, memo } from "react";
import PokemonDetails from "../components/PokemonsDetails";
import { currentPokemon, allPokemons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const defaultImages =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const Pokemons = memo(() => {
  const dispatch = useDispatch();

  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const { pokemons } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allPokemons(0, 10));
  }, [dispatch]);

  const nextStep = () => {
    let offset = currentOffset + 10;
    setCurrentPage(currentPage + 1);
    setCurrentOffset(offset);
    dispatch(allPokemons(offset, 10, "name", searchTerm));
  };

  const prevStep = () => {
    let offset = currentOffset - 10;
    setCurrentPage(currentPage - 1);
    setCurrentOffset(offset);
    dispatch(allPokemons(offset, 10, "name", searchTerm));
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
    if (!e.target.value > 0) dispatch(allPokemons(currentOffset, 10));
  };

  return (
    <div
      className="container col-lg-9 col-md-10 col-sm-5  d-flex flex-column"
      style={{ height: "100vh", backgroundColor: "#DDD", padding: "0px 32px" }}
    >
      <div className="d-flex justify-content-between">
        <h1>Pokemons</h1>
        <h3 className=" align-self-center">
          Page: {currentPage}/{Math.ceil(pokemons.currentSearchCount / 10)}
        </h3>
      </div>

      <SearchBar
        filter={allPokemons}
        handleChange={handleSearch}
        searchTerm={searchTerm}
      />
      <div
        className="d-inline-block w-auto col-md-5 col-sm-5 flex-row flex-wrap"
        style={{
          height: "500px",
          paddingLeft: "5px",
        }}
      >
        {pokemons.results.length > 0 ? (
          pokemons.results.map((pok, index) => (
            <div
              key={index}
              className="card p-2 m-2 float-start"
              style={{ width: "162px", height: "230px" }}
              onClick={() => selectItem(pok.id)}
            >
              <>{console.log(pok.imageUrl)}</>
              <img
                src={pok.imageUrl}
                alt={pok.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImages;
                }}
                className="m-auto"
              />
              <h4 className="m-auto text-capitalize">{pok.name}</h4>
            </div>
          ))
        ) : (
          <h1 className="m-auto text-capitalize">
            No se encontro ningun pokemon
          </h1>
        )}
      </div>

      <PokemonDetails show={modalShow} onHide={() => unSelectItem()} />
      <Pagination
        textButtonPrev="Prev"
        textButtonNext="Next"
        prev={prevStep}
        next={nextStep}
        prevOnDisabled={currentPage === 1}
        nextOnDisabled={
          currentPage === Math.ceil(pokemons.currentSearchCount / 10)
        }
      />
    </div>
  );
});

export default Pokemons;

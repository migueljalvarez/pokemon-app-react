import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { capitalize } from "../helpers/capitalize";
import { findByUrl } from "../services/pokemons";

const PokemonsDetails = ({ show, onHide }) => {
  const { pokemon } = useSelector((state) => state);

  const specie = pokemon.types.map((data) => data.type.name) || ["desconocida"];
  const habilities = pokemon.abilities.map((data) => data.ability.name) || [
    "desconocida",
  ];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {capitalize(pokemon.name)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <div>
            <p>Nombre: {capitalize(pokemon.name)}</p>
            <p>Especie: {capitalize(specie.join(","))} </p>
            <p>Peso: {pokemon.weight} </p>
            <p>Locacion: {} </p>
            <p>Habilidades: {habilities.join(",")} </p>
          </div>

          <div className="">
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              width="250"
              height="400"
              className=""
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PokemonsDetails;

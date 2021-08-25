import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { capitalize } from "../helpers/capitalize";

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
            <p>Especie: {capitalize(specie.join(" "))} </p>
            <p>Peso: {pokemon.weight} </p>
            <p>Habilidades: {habilities.join(" ")} </p>
          </div>

          <div className="">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className="text-center">{capitalize(pokemon.name)}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PokemonsDetails;

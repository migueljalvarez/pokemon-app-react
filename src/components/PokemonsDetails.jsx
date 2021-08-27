import React from "react";
import constants from "../helpers/constants";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeOperator } from "../helpers/textHelper";

const { DEFAULT_POKEMON_IMAGES } = constants;
const PokemonsDetails = ({ show, onHide }) => {
  const { pokemon } = useSelector((state) => state);

  const specialDefense = pokemon.stats ? pokemon.stats["special-defense"] : 0;
  const specialAttack = pokemon.stats ? pokemon.stats["special-attack"] : 0;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-capitalize"
        >
          {removeOperator(pokemon.name, "-")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <div id="pokemon-info" className="">
            <div>
              <span>hp:</span>
              <ProgressBar
                now={pokemon.stats?.hp || 0}
                label={`${pokemon.stats?.hp || 0}%`}
              />
            </div>
            <div>
              <span>attack:</span>
              <ProgressBar
                now={pokemon.stats?.attack || 0}
                label={`${pokemon.stats?.attack || 0}%`}
              />
            </div>
            <div>
              <span>defense:</span>
              <ProgressBar
                now={pokemon.stats?.defense || 0}
                label={`${pokemon.stats?.defense || 0}%`}
              />
            </div>
            <div>
              <span>special-attack:</span>
              <ProgressBar now={specialAttack} label={`${specialAttack}%`} />
            </div>
            <div>
              <span>special-defense:</span>
              <ProgressBar now={specialDefense} label={`${specialDefense}%`} />
            </div>

            <p>Peso: {pokemon.weight} </p>
            <p>Habilidades: {pokemon?.abilities?.join(" ")} </p>
          </div>

          <div className="text-center">
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DEFAULT_POKEMON_IMAGES;
              }}
              className="m-auto"
            />
            <h3 className="text-center text-capitalize">
              {removeOperator(pokemon.name, "-")}
            </h3>
            <h4 className="text-capitalize">Especie: {pokemon.type}</h4>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PokemonsDetails;

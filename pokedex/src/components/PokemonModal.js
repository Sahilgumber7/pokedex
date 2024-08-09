import React from 'react';
import { Modal } from 'flowbite-react';

const PokemonModal = ({ pokemon, show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>
        {pokemon.name}
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={`${pokemon.name} shiny`} />
          <div className="text-lg font-semibold">
            {pokemon.name}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PokemonModal;

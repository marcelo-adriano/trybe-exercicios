import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './pokedex.css'

class Pokedex extends React.Component {
    render() {
        return(
            <main className='conteudo-principal'>
                {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </main>
        );
    }
}

export default Pokedex;

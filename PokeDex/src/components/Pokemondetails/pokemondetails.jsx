import React from "react";
import {  useParams } from "react-router-dom"
import './Pokemondetails.css'

import usePokemonDetails from "../../hooks/UsePokemonDetails";

function Pokemondetails({pokemonName}) {
    const {id} =useParams();
    // const [pokemon]=  usePokemonDetails(id, pokemonName)
    const [pokemon] = usePokemonDetails(id,pokemonName);
   
    return(
        <div className="pokemon-details-wrapper">
           <img  className="pokemon-details-image" src={pokemon.Image}  />
           <div className="pokemon-details-name">Name:<span> {pokemon.name}</span></div>
           <div className='height-wrapper'>Height:{pokemon.height /10} m</div>
           <div className='weight-wrapper'>Weight:{pokemon.weight /10} kg</div>
          <div className="pokemon-details-types">Types: {pokemon.types && pokemon.types.map((t)=><div key={t}> {t}</div>)}
          </div> 
          {
          pokemon.types && pokemon.similarPokemon &&
          <div className="poketype">
            More {pokemon.types[0]} Type Pokemons
            <ul>
                { pokemon.similarPokemon.map((p) => <li key ={p.pokemon.url } >{p.pokemon.name}</li>)}
            </ul>
          </div>
          }
        </div>
   )
}

export default Pokemondetails;


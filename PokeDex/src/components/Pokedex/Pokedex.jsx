import React, { useEffect, useState } from 'react'
import Search from '../Search/Search';

import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList';
import Pokemondetails from '../Pokemondetails/pokemondetails';
function Pokedex() {
    const[searchTerm,setSearchterm] =useState('')
    
    return (
        <div className='pokedex-wrapper'>
         
            <Search updateSearchterm ={setSearchterm}/>
           
           {(!searchTerm) ?<PokemonList/>: <Pokemondetails key={searchTerm}    pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;

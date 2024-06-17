import axios from "axios";
import { useState,useEffect } from "react";
import usePokemonlist from "./UsePokemonList";

function usePokemonDetails(id,pokemonName) {
    const [pokemon,setPokemon] =useState({})
    async function downlaodPokemon(){
        try {
            let response;
            if(pokemonName) {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            } else {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
        
    const pokemonOfSameTypes= await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name: ''}`)
        setPokemon({
            name:response.data.name,
            height:response.data.height,
            Image:response.data.sprites.other.dream_world.front_default,
            types:[...new Set(response.data.types.map((type)=> type.type.name))],
            weight:response.data.weight,
            similarPokemon:pokemonOfSameTypes.data.pokemon.slice(0,7)

        });
           setPokemonListState({...pokemonListState, type:response.data.types ? response.data.types[0].type.name: ''})
        }catch(error){
            console.log('something went wrong');
        }
    }
         const[pokemonListState,setPokemonListState]= usePokemonlist()
       
        useEffect(()=>{
        downlaodPokemon()
         } ,[]);
         return[ pokemon]
}
export default usePokemonDetails;
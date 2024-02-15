import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './UsePokemonlist.css'

function usePokemonlist() {
    const [pokemonListState,setPokemonListState] = useState({
        pokemonList:[],
        isLoading: true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:'',
        type:""
    });

    async function downlaodPokemons() {
        // setIsLoading(true)
        
            //here we itrating on array of pokemon
            // if(pokemonListState.type){
            //     const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonListState.type}`);
            //     setPokemonListState((state)=>({
            //         ...state,
            //      pokemonList:response.data.pokemon,
            //     }));
            // }
            {
                setPokemonListState(({...pokemonListState,isLoading:true}))
        const response = await axios.get(pokemonListState.pokedexUrl); // here is the list of 20 pokemon
        const pokemonResults = response.data.results; // we get array from results 
         console.log('respnose ise',response.data.pokemon)
         console.log(pokemonListState)
         setPokemonListState((state)=>({
             ...state,
            nextUrl:response.data.next,
            prevUrl: response.data.previous
         }));
         const pokemonResultsPromise= pokemonResults.map((pokemon) => axios.get
         (pokemon.url));
         const pokemonData = await axios.all(pokemonResultsPromise)
         console.log(pokemonData);
         //set the state with the data we just fetched
         const pokeListResult= pokemonData.map((pokeData) => {
          const pokemon =   pokeData.data;
          return{
                id:pokemon.id,
                name: pokemon.name, 
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types}
         });
         console.log(pokeListResult);
         setPokemonListState((state)=>({
            ...state,
            pokemonList:pokeListResult,
            isLoading: false
        }));
         }
    }
             useEffect(  () => {
                downlaodPokemons();
             },[pokemonListState.pokedexUrl])

        return[pokemonListState,setPokemonListState]
}

export default usePokemonlist;

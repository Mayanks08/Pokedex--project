
import './PokemonList.css'
import Pokemon from "../Pokemon/pokemon";
import usePokemonlist from "../../hooks/UsePokemonList"
import { useEffect } from 'react';
function PokemonList() {
    const [ pokemonListState, setPokemonListState] = usePokemonlist(false);
    useEffect(() => {
        console.log("render")
    })
    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(pokemonListState.isLoading) ? 'Loading....' : 
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
                }
            </div>
            <div className="btns">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.prevUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }}>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => {
                    console.log(pokemonListState)
                    const urlToSet = pokemonListState.nextUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;
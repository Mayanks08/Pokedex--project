import { Route, Routes } from "react-router-dom"
import Pokedex from "../components/Pokedex/Pokedex"
import PokemonList from "../components/PokemonList/PokemonList"
import Pokemondetails from "../components/Pokemondetails/pokemondetails"
function CoustomRoutes() {
    return(
      <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<Pokemondetails/>}/>
      </Routes>
    )
}

export default CoustomRoutes

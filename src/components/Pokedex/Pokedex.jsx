import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// CSS import
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {

   const [searchTerm, setSearchTerm] = useState('');



    return (
        <div className="pokedex-wrapper">         
            <Search updatSearchTerm={setSearchTerm} />
            {searchTerm}
            { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />} 
        </div>
    )
}

export default Pokedex;
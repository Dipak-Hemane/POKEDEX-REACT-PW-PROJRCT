import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";


function usePokemonDetails(id, pokemonName) {


    const [pokemon, setPokemon] = useState({});
    let pokemonListHookResponse = [];
    async function downloadPokemon() {
        try {

              let response;
            if(pokemonName){
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }else {
            response =  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
               
        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`)
        console.log('similar', pokemonOfSameTypes)
    
        setPokemon(state => ({
            ...state,
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
        }));
        pokemonOfSameTypes.then((response) => {
            setPokemon(state => ({
            ...state,
            similarPokemons: response.data.pokemon
        }));
        })
        console.log(response.data.types);
        setPokemonListState({...pokemonListState,  type: response.data.types ? response.data.types[0].type.name : ''})

        } catch (error) {
            console.log("something went wrong");
        }      
    }
    

    const  [ pokemonListState, setPokemonListState] = usePokemonList();

    useEffect(() => {
        
        downloadPokemon();
        
        console.log( "List", pokemon.types, pokemonListState);
    }, []);

    return [pokemon]
}

export default usePokemonDetails;
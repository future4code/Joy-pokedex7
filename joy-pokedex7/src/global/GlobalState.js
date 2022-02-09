import React from "react";
import Context from "./Context";
import axios from "axios";
import { useState } from "react";

export const GlobalState = (props)=>{

    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(1)
    const [offset, setOffset] = useState()

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then((response) => {
        setPokemon(response.data.results)
        console.log(response.data);
        })
        .catch((err) => {
        alert(err)
        })
    }
    const states = {
        pokemon,
        page,
        offset
    }

    const setters = {
        setPokemon,
        setPage,
        setOffset
    }

    const getters = {
        getPokemon
    }

    return(
        <Context.Provider value={{states, setters, getters}}>
            {props.children}
        </Context.Provider>
    )
}
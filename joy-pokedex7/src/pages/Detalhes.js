import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {

    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()
    console.log(pokemon)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    if (pokemon) {
        return (
            <div>
                <p>Detalhes</p>
                <div>
                    <img src={pokemon.sprites.front_default} />
                    <img src={pokemon.sprites.back_default} />
                </div>
                <div>
                    <h3>Poderes</h3>
                    <p><b>hp:</b> {pokemon.stats [0].base_stat}</p>
                    <p><b>attack:</b> {pokemon.stats [1].base_stat}</p>
                    <p><b>defense:</b> {pokemon.stats [2].base_stat}</p>
                    <p><b>special-attack:</b> {pokemon.stats [3].base_stat}</p>
                    <p><b>special-defense:</b> {pokemon.stats [4].base_stat}</p>
                    <p><b>speed:</b> {pokemon.stats [5].base_stat}</p>
                </div>
                <div>
                    <div>
                        <p>{pokemon.types [0].type.name}</p>
                        <p>{pokemon.types [1].type.name}</p>
                    </div>
                    <div>
                        <h3>Principais ataques</h3>
                        <p>{pokemon.moves [0].move.name}</p>
                        <p>{pokemon.moves [1].move.name}</p>
                        <p>{pokemon.moves [2].move.name}</p>
                        <p>{pokemon.moves [3].move.name}</p>
                        <p>{pokemon.moves [4].move.name}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }

};

export default Detalhes;

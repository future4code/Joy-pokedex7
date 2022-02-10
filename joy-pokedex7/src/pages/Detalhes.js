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

    return(
        <div>
            <p>Detalhes</p>
            <div>
                <img src= {pokemon.sprites.front_shiny}/>
                <img src= {pokemon.sprites.back_shiny}/>
            </div>
            <di>
                <h3>Poderes</h3>
                <p><b>hp:</b></p>
                <p><b>attack:</b></p>
                <p><b>defense:</b></p>
                <p><b>special-attack:</b></p>
                <p><b>special-defense:</b></p>
                <p><b>speed:</b></p>
            </di>
            <div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h3>Principais ataques</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    ) 
};

export default Detalhes;

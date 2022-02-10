import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {

    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()
    // console.log(pokemon)

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
                    <p><b>hp:</b></p>
                    <p><b>attack:</b></p>
                    <p><b>defense:</b></p>
                    <p><b>special-attack:</b></p>
                    <p><b>special-defense:</b></p>
                    <p><b>speed:</b></p>
                </div>
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
    } else {
        return <></>
    }

};

export default Detalhes;

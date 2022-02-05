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

    return <div>
        <p>Detalhes</p>
    </div>;
};

export default Detalhes;

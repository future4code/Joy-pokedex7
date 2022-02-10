import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCardPokedex from '../components/PokemonCardPokedex';
import { Typography } from '@mui/material';
import { Pagination } from '@mui/material';

const Pokedex = () => {
    const { states, setters } = useContext(PokemonContext)

    const pokedex = states.pokedex
    const setPokedex = setters.setPokedex

    const count = (pokedex.length / 20)

    const page = states.page
    const setPage = setters.setPage

    const history = useHistory()

    const cardsPoke = pokedex.map((poke) => {
        return (
            <PokemonCardPokedex key={poke.name} url={poke.url} />
        )
    })


    const removePokedex = () => {
        setPokedex([])
    }

    const goToHome = () => {
        history.push(`/`)
    }

    const handleChange = (event, value) => {
        setPage(value)
    }


    if (pokedex) {
        return <div>
            <p>Pokedex</p>
            <button onClick={goToHome}>Ir para Home</button>
            <button onClick={removePokedex}>Esvaziar pokedex</button>
            {cardsPoke}
            <Typography>Página: {page}</Typography>
            <Pagination count={Math.ceil(count)} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
        </div>;
    } else {
        return <div>
            <p>Nenhum pokemon adicionado</p>
        </div>
    }

};

export default Pokedex;

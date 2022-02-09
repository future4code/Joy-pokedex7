import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCard from '../components/PokemonCard';
import { Pagination, Typography } from '@mui/material';
import { GlobalState } from '../global/GlobalState';

const Home = () => {
    const { states, setters, getters } = useContext(PokemonContext)

    const {pokemon, page, offset} = states;
    const {setPokemon, setPage, setOffset} = setters
    const {getPokemon} = getters

    useEffect(()=>{
        getPokemon()
    }, [offset])

    const history = useHistory()

    const cardsPoke = pokemon.map((poke) => {
        return (
            <PokemonCard key={poke.name} url={poke.url} />
        )
    })

    const handleChange = (event, value) => {
        setPage(value)
        setOffset((value - 1) * 20)
        getPokemon()
    }

    return <div>
        <p>Home</p>
        {cardsPoke}
        <Typography>Página: {page}</Typography>
        <Pagination count={56} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
    </div>;
};

export default Home;

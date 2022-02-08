import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonContext from '../contexts/context';
import PokemonCard from '../components/PokemonCard';
import { Pagination, Typography } from '@mui/material';

const Home = () => {
    const { values } = useContext(PokemonContext)
    const { setters } = useContext(PokemonContext)
    const { getters } = useContext(PokemonContext)

    const pokemon = values.pokemon

    const offset = values.offset
    const setOffset = setters.setOffset

    const page = values.page
    const setPage = setters.setPage

    const getPokemon = getters.getPokemon

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

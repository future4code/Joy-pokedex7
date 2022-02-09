import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonContext from '../contexts/context';
import PokemonCard from '../components/PokemonCard';
import { Pagination, Typography } from '@mui/material';

const Home = () => {
    const { values } = useContext(PokemonContext)
    const { setters } = useContext(PokemonContext)

    const pokemon = values.pokemon
    const pokedex = values.pokedex

    const setOffset = setters.setOffset

    const page = values.page
    const setPage = setters.setPage

    const history = useHistory()

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }


    const cardsPoke = pokemon.filter((poke) => {
        return (!pokedex.some(e => e.url === poke.url))
    })
        .map((poke) => {
            return (
                <PokemonCard key={poke.name} url={poke.url} name={poke.name} />
            )
        })

    const handleChange = (event, value) => {
        setPage(value)
        setOffset((value - 1) * 20)
    }




    // console.log(pokemon);
    return <div>
        <p>Home</p>
        <button onClick={goToPokedex}>Ir para Pokedex</button>
        {cardsPoke}
        <Typography>Página: {page}</Typography>
        <Pagination count={56} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
    </div>;
};

export default Home;

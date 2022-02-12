import React, { useContext } from 'react';
import { useHistory, } from 'react-router-dom';
import { useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCard from '../components/PokemonCard';
import { Pagination, Typography } from '@mui/material';
import Header from "../components/Header"
import { ContainerHome,Pagina } from "./styled";

const Home = () => {
    const { states, setters, getters } = useContext(PokemonContext)

    const { pokemon, page, offset, pokedex } = states
    const { setPokemon, setPage, setOffset, setPokedex } = setters
    const { getPokemon } = getters

    useEffect(() => {
        getPokemon()
    }, [offset])

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
    if (pokemon.length !== 0) {
        return <div>
            <Header />
            <ContainerHome>
            {cardsPoke}
            </ContainerHome>
            <Pagina>    
            <Pagination count={9} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
            <Typography>Página: {page}</Typography>
            </Pagina>
           
            
        </div>;
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

};

export default Home;

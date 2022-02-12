import React, { useContext } from 'react';
import { useHistory, } from 'react-router-dom';
import { useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCard from '../components/PokemonCard';
import { Pagination, Typography } from '@mui/material';
import { ContainerHome, Pagina } from "./styled";
import styled from 'styled-components';
import logo from "../assents/Logo.png";

const Container = styled.div` 
overflow-x: hidden;
`

const Header = styled.header`
height: 18vh;
width: 100vw;
background: linear-gradient(45deg, #0d30a8, #d7f9c1);
display: flex;
align-items: center;
justify-content: center;
color: white;
position: relative;
h1 {
  margin-left: 38vw;  
}
img {
  height: 15vh;
  width: 20vw;
}
`

const Button = styled.button`
margin: 0 10px 0 10px;
background: #0d30a8;
border-radius: 999px;
box-shadow: #0d30a8 0 10px 20px -10px;
box-sizing: border-box;
color: #FFFFFF;
font-size: 16px;
font-weight: 700;
line-height: 24px;
opacity: 1;
outline: 0 solid transparent;
padding: 8px 30px;
`

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

    const removePokedex = () => {
        setPokedex([])
        alert("Pokedex esvaziada com sucesso!")
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
        return <Container>
            <Header>
                <Button onClick={goToPokedex}>
                    Pokedex
                </Button>
                <img src={logo} alt="" />
                <Button onClick={removePokedex}>
                    Esvaziar Pokedex
                </Button>
            </Header>
            <ContainerHome>
                {cardsPoke}
            </ContainerHome>
            <Pagina>
                <Pagination count={9} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
                <Typography>Página: {page}</Typography>
            </Pagina>
        </Container>;
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }

};

export default Home;

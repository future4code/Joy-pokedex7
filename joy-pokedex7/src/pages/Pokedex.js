import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import PokemonContext from '../global/Context';
import PokemonCardPokedex from '../components/PokemonCardPokedex';
import { Typography } from '@mui/material';
import { Pagination } from '@mui/material';
import logo from "../assents/Logo.png";
import { ContainerHome, Pagina } from "./styled";
import styled from 'styled-components';

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
        alert("Pokedex esvaziada com sucesso!")
    }

    const goToHome = () => {
        history.push(`/`)
    }

    const handleChange = (event, value) => {
        setPage(value)
    }

    if (pokedex.length !== 0) {

        return <Container>
            <Header>
                <Button onClick={goToHome}>
                    Página Inicial
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
                <Typography>Página: {page}</Typography>
                <Pagination count={Math.ceil(count)} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
            </Pagina>

        </Container>;
    } else {
        return <Container>
            <Header>
                <Button onClick={goToHome}>
                    Página Inicial
                </Button>
                <img src={logo} alt="" />

            </Header>
            <ContainerHome>
                <p>Nenhum pokemon adicionado.</p>
            </ContainerHome>
            <Pagina>
                <Typography>Página: {page}</Typography>
                <Pagination count={Math.ceil(count)} variant="outlined" color="primary" shape='rounded' page={page} onChange={handleChange} />
            </Pagina>
        </Container>
    }

};

export default Pokedex;

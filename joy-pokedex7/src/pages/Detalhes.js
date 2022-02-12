import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from "../assents/Logo.png";
import { ContainerHome } from "./styled";
import Fundo from '../assents/Fundo.jpg';


const Container = styled.div` 
overflow-x: hidden;
`

const Header = styled.header`
height: 18vh;
width: 100vw;
background: linear-gradient(45deg, #0d30a8, #d7f9c1);
display: flex;
align-items: center;
justify-content: space-evenly;
color: white;
position: relative;
img {
     max-height: 15vh;
     max-width: 40vw;
    }
`

const Button = styled.button`
margin: 0 10px 0 10px;
background: #0d30a8;
box-shadow: #0d30a8 0 10px 20px -10px;
box-sizing: border-box;
border-radius: 999px;
color: #FFFFFF;
font-size: 16px;
font-weight: 700;
line-height: 24px;
opacity: 1;
outline: 0 solid transparent;
padding: 8px 10px;
`
const NomePokemon = styled.div`
display: flex;
height: 20vh;
flex-direction: column;
align-self: center;
align-items: center;
font-family: Verdana, Arial, Helvetica, sans-serif;
color:#0d30a8;
font-size: 10px;
font-weight: bold;
text-shadow: 2px 4px 5px #76bfd1;
text-transform: uppercase;
.images{
    margin: 0;
    padding: 0;
    height: 70%;
    img{
        height: 100%;
    }
}
`

const DataContainer = styled.div` 
border: 1px solid #fff50f; 
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
box-shadow: 1px 0px 3px 0px #ffc222;
border-radius: 20px;
margin: 20px;
width: 90vw;
min-height: 60vh;
display: flex;
flex-direction: column;
h2{
    margin: 0 auto;
}
`

const PokemonSkills = styled.div`
display: flex;
color: white;
text-shadow: 2px 4px 5px #76bfd1;
min-height:40vh;
max-height: 45vh;
align-items: start;
justify-content: space-evenly;
    div{
        margin: 0 20px 8px 20px;
    }
`

const Detalhes = () => {

    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const goToHome = () => {
        history.push(`/`)
    }

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }

    if (pokemon) {

        const types = pokemon.types.map((item) => {
            return (<p>
                {item.type.name}
            </p>)
        })

        console.log(pokemon);
        return (
            <Container >
                <Header>
                    <Button onClick={goToHome}>
                        Página Inicial
                    </Button>
                    <img src={logo} alt="Logotipo pokemon" />
                    <Button onClick={goToPokedex}>
                        Pokedex
                    </Button>
                </Header>

                <ContainerHome key={pokemon.id}>
                    <DataContainer>
                        <NomePokemon>
                            <h1>{pokemon.name.toUpperCase()}</h1>
                            <div className='images'>
                                <img src={pokemon.sprites.front_default} alt={`${pokemon.name} de frente`} />
                                <img src={pokemon.sprites.back_default} alt={`${pokemon.name} de costas`} />
                            </div>
                        </NomePokemon>
                        <PokemonSkills>
                            <div>
                                <h3>Tipos</h3>{types}
                            </div>
                            <div>
                                <h3>Poderes</h3>
                                <p><b>hp:</b> {pokemon.stats[0].base_stat}</p>
                                <p><b>attack:</b> {pokemon.stats[1].base_stat}</p>
                                <p><b>defense:</b> {pokemon.stats[2].base_stat}</p>
                                <p><b>special-attack:</b> {pokemon.stats[3].base_stat}</p>
                                <p><b>special-defense:</b> {pokemon.stats[4].base_stat}</p>
                                <p><b>speed:</b> {pokemon.stats[5].base_stat}</p>
                            </div>
                            <div>
                                <div>
                                    <h3>Principais ataques</h3>
                                    <p>{pokemon.moves[0].move.name}</p>
                                    <p>{pokemon.moves[1].move.name}</p>
                                    <p>{pokemon.moves[2].move.name}</p>
                                    <p>{pokemon.moves[3].move.name}</p>
                                    <p>{pokemon.moves[4].move.name}</p>
                                </div>
                            </div>
                        </PokemonSkills>
                    </DataContainer>
                </ContainerHome>

            </Container>
        )
    } else {
        return <h1>Loading...</h1>
    }

};

export default Detalhes;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../global/Context";
import styled from "styled-components";
import Fundo from '../assents/Fundo.jpg';

const PokemonCard1 = styled.div`
border: 1px solid #fff50f; 
background-image: url(${Fundo});
box-shadow: 1px 0px 3px 0px #ffc222;
border-radius: 20px;
width: 250px;
height: 250px;
margin: 20px;

img{
    width: 85%;
    height: 80%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
}
h2{
    margin: 0 auto;
}
`
const NomePokemon = styled.div`
text-align: center;
font-family: Verdana, Arial, Helvetica, sans-serif;
color:#0d30a8;
font-size: 10px;
font-weight: bold;
text-shadow: 2px 4px 5px #76bfd1;
text-transform: uppercase;
`

const Buttons = styled.div`
text-align: center;
button{
      margin: 1px 2px;
      background: linear-gradient(45deg, #0d30a8, #76bfd1);
      box-sizing: border-box;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 4px 10px;
      cursor: pointer;
}
`

const PokemonCard = (props) => {

  const [pokemon, setPokemon] = useState()
  const history = useHistory()
  const { states, setters } = useContext(PokemonContext)

  const pokedex = states.pokedex
  const setPokedex = setters.setPokedex

  useEffect(() => {
    if (props) {
      axios.get(props.url)
        .then((res) => {
          setPokemon(res.data)
        })
        .catch((err) => {
          alert(err)
        })
    }

  }, [])

  const goToDetalhes = () => {
    history.push(`/detalhes/${pokemon.name}`)
  }

  const pokemonData = {
    name: props.name,
    url: props.url
  }

  const addToPokedex = () => {
    setPokedex([...pokedex, pokemonData])
    alert(`${pokemon.name} adicionado à pokedex!`)
  }
  if (pokemon) {
    return (
      <div>
        <PokemonCard1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </PokemonCard1>
        <NomePokemon>
          <h1>{pokemon.name}</h1>
        </NomePokemon>
        <Buttons>
          <button onClick={addToPokedex}>Adicionar</button>
          <button onClick={goToDetalhes}>Detalhes</button>
        </Buttons>
      </div>

    )
  }
  else {
    return (
      <></>
    )
  }

}

export default PokemonCard
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../global/Context";
import styled from "styled-components";

const PokemonCard1 = styled.div`
border: 1px solid #ffc222; 
box-shadow: 1px 0px 3px 0px #ffc222;
border-radius: 20px;
width: 350px;
height: 350px;
margin: 35px;
}
img{
    width: 75%;
    height: 70%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
}
h2{
    margin: 0 auto;
}
`

const Buttons = styled.div`
text-align: center;
width: 100%;
height: flex;
flex-direction: row;

button{
    margin: 0 10px 0 10px;
      background: #bf0000;
      border-radius: 999px;
      box-shadow: #bf0000 0 10px 20px -10px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 30px;
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
      <PokemonCard1>
      <div>
      <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Buttons>
        <button onClick={addToPokedex}>Adicionar</button>
        <button onClick={goToDetalhes}>Detalhes</button>
        </Buttons>
      </div>
      </PokemonCard1>
    )
  }
  else {
    return (
      <></>
    )
  }

}

export default PokemonCard
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../global/Context";

const PokemonCardPokedex = (props) => {

  const [pokemon, setPokemon] = useState()
  const [removePokemon, setRemovePokemon] = useState({})
  const history = useHistory()
  const { states, setters } = useContext(PokemonContext)

  const pokedex = states.pokedex
  const setPokedex = setters.setPokedex

  useEffect(() => {
    axios.get(props.url)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }, [pokedex])

  const goToDetalhes = () => {
    history.push(`/detalhes/${pokemon.name}`)
  }

  const pokemonData = {
    name: props.name,
    url: props.url
  }

  const rmvPoke = (name) => {
    const pokem = pokedex.filter((pokemon) => {
      return pokemon.name !== name
    })
    setPokedex(pokem)
  }

  if (pokemon) {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <button onClick={() => rmvPoke(pokemon.name)}>Remover</button>
        <button onClick={goToDetalhes}>Detalhes</button>
      </div>
    )
  } else {
    return (
      <></>
    )
  }

}

export default PokemonCardPokedex
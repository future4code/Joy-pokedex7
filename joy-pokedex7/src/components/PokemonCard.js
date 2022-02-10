import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../global/Context";

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
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <button onClick={addToPokedex}>Adicionar</button>
        <button onClick={goToDetalhes}>Detalhes</button>
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
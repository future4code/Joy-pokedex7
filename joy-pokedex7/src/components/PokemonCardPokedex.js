import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../contexts/context";

const PokemonCardPokedex = (props) => {

  const [pokemon, setPokemon] = useState()
  const history = useHistory()
  const { values } = useContext(PokemonContext)
  const { setters } = useContext(PokemonContext)

  const pokedex = values.pokedex
  const setPokedex = setters.setPokedex

  useEffect(() => {
    axios.get(props.url)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  const goToDetalhes = () => {
    history.push(`/detalhes/${pokemon.name}`)
  }

  const pokemonData = {
    name: props.name,
    url: props.url
  }

  const removeFromPokedex = () => {
    setPokedex(pokedex.filter((poke) => {
      return !pokedex.some(e => e.url === poke.url)
    }))
    alert(`${pokemon.name} removido da pokedex!`)
  }

  if (pokemon) {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <button onClick={removeFromPokedex}>Remover</button>
        <button onClick={goToDetalhes}>Detalhes</button>
      </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }

}

export default PokemonCardPokedex
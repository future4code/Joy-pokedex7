import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import PokemonContext from "../contexts/context";

const PokemonCard = (props) => {

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

  const addToPokedex = () => {
    setPokedex([...pokedex, pokemonData])
    alert(`${pokemon.name} adicionado à pokedex!`)

  }

  // console.log(pokedex)
  if (pokemon) {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <button onClick={addToPokedex}>Adicionar</button>
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

export default PokemonCard
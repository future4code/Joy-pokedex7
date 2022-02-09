// import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PokemonCard = (props) => {

  const [pokemon, setPokemon] = useState()
  const history = useHistory()
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

  // console.log(pokemon)
  if (pokemon) {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <button>Adicionar</button>
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
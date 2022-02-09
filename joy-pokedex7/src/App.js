import Router from './routes/Router';
import axios from 'axios';
import PokemonContext from './contexts/context';
import { useState, useEffect, useContext } from 'react';


function App() {

  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemon()
  }, [offset])

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((response) => {
        setPokemon(response.data.results)
        // console.log(response.data);
      })
      .catch((err) => {
        alert(err)
      })
  }

  const values = {
    pokemon,
    page,
    pokedex
  }

  const setters = {
    setOffset,
    setPage,
    setPokedex,
    setPokemon
  }

  return (
    <PokemonContext.Provider value={{ values, setters }}>
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;

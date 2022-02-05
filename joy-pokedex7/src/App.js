import Router from './routes/Router';
import axios from 'axios';
import PokemonContext from './contexts/context';
import { useState, useEffect, useContext } from 'react';


function App() {

  const [pokemon , setPokemon] = useState([])
  
  useEffect(()=>{
    getPokemon()
  }, [])

  const getPokemon = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
      setPokemon(response.data.results)
    })
    .catch((err)=>{
      alert(err)
    })
  }

  return (
    <PokemonContext.Provider value={pokemon}>
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;

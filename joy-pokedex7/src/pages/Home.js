import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonContext from '../contexts/context';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const pokemon = useContext(PokemonContext)
    const history = useHistory()

    const cardsPoke = pokemon.map((poke)=>{
        return(
            <PokemonCard key={poke.name} url = {poke.url}/>
        )
    })

    return <div>
        <p>Home</p>
        {cardsPoke}
    </div>;
};

export default Home;

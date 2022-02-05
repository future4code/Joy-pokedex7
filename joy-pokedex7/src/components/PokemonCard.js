import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = (props) =>{

    const [pokemon , setPokemon] = useState()
    console.log(props)

    useEffect(()=>{
        axios.get(props.url)
        .then((res)=>{
          setPokemon( res.data)
        })
        .catch((err)=>{
          alert(err)
        })
    }, [])
    

    console.log(pokemon)
    return(
        <div>
            <img src={pokemon.sprites.front_default}/>
        </div>
    )
}

export default PokemonCard
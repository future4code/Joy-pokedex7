import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DataContainer = styled.div` 
width: 80vw;
margin: 0 10vw;
display: flex;
flex-direction: column;
border: 1px solid black;
`
const PokemonData = styled.div`
display: flex;
flex-direction: column;
align-self: center;
`

const PokemonSkills = styled.div`
display: flex;
align-items: start;
justify-content: space-evenly;
    div{
        margin: 20px;
    }
`

const Detalhes = () => {

    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const goToHome = () => {
        history.push(`/`)
    }

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }

    if (pokemon) {

        const types = pokemon.types.map((item) => {
            return (<p>
                {item.type.name}
            </p>)
        })

        console.log(pokemon);
        return (
            <div >
                <p>Detalhes</p>
                <button onClick={goToHome}>Home</button>
                <button onClick={goToPokedex}>Pokedex</button>
                <DataContainer key={pokemon.id}>

                    <PokemonData>
                        <h1>{pokemon.name.toUpperCase()}</h1>
                        <div>
                            <img src={pokemon.sprites.front_default} />
                            <img src={pokemon.sprites.back_default} />
                        </div>
                    </PokemonData>
                    <PokemonSkills>

                        <div>
                            <h3>Tipos</h3>{types}
                        </div>
                        <div>
                            <h3>Poderes</h3>
                            <p><b>hp:</b> {pokemon.stats[0].base_stat}</p>
                            <p><b>attack:</b> {pokemon.stats[1].base_stat}</p>
                            <p><b>defense:</b> {pokemon.stats[2].base_stat}</p>
                            <p><b>special-attack:</b> {pokemon.stats[3].base_stat}</p>
                            <p><b>special-defense:</b> {pokemon.stats[4].base_stat}</p>
                            <p><b>speed:</b> {pokemon.stats[5].base_stat}</p>
                        </div>
                        <div>

                            <div>
                                <h3>Principais ataques</h3>
                                <p>{pokemon.moves[0].move.name}</p>
                                <p>{pokemon.moves[1].move.name}</p>
                                <p>{pokemon.moves[2].move.name}</p>
                                <p>{pokemon.moves[3].move.name}</p>
                                <p>{pokemon.moves[4].move.name}</p>
                            </div>
                        </div>
                    </PokemonSkills>

                </DataContainer>

            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }

};

export default Detalhes;

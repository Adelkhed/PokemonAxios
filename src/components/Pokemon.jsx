import React from 'react'
import {useState} from 'react'
import axios from 'axios'
const Pokemon = () => {
    const [Pokemons, setPokemons] = useState([])
    const fetchPokemon = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
           .then (response => { 
                            setPokemons(response.data.results);
        })
        .catch (err => {
            console.log(err)
        })
    }
  return (
    <fieldset>
        <legend>Pokemons</legend>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <table>
            <thead>
                <tr>
                    
                    <th>Name</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    Pokemons.map((onePokemon, index)=>{
                        return (
                            <tr key={index}>
                                
                                <td>
                                    <li>{onePokemon.name}</li>
                                </td>

                            
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </fieldset>
  )
}

export default Pokemon
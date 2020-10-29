import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import data from './Data.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                <div className='pokemon-list'>
                    {
                        data.map(pokemon =>
                        <PokeItem className='pokemon-item' name={pokemon.pokemon}image={pokemon.url_image}type_1={pokemon.type_1}type_2={pokemon.type_2}attack={pokemon.attack}defence={pokemon.defence}/>)
                    }
                </div>
            </div>
        )
    }
}

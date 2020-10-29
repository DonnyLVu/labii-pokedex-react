import React, { Component } from 'react'
import PokeItem from './PokeItem'



export default class PokeList extends Component {
    render() {
        return (
            <div>
                <div className='pokemon-list'>
                {
                    this.props.pokeData.filter((item) => {
                        if (!this.props.type_1) return true;
                        if (item.type_1 === this.props.type_1) return true;
                        return false;
                    })
                    .filter((item) => {
                        if (!this.props.egg_group_1) return true;
                        if (item.egg_group_1 === this.props.egg_group_1) return true;
                        return false;
                    })
                    .filter((item) => {
                        if (!this.props.submitProp) return true;
                        if (item.pokemon === this.props.submitProp) return true;
                        return false;
                    })

                    .filter((item) => {
                        if (!this.props.changeProp) return true;
                        if (item.pokemon === this.props.changeProp) return true;
                        return false;
                    })
                    .map(pokemon =>
                    <PokeItem className='pokemon-item' 
                    name={pokemon.pokemon}
                    image={pokemon.url_image}
                    type_1={pokemon.type_1}
                    egg_group_1={pokemon.egg_group_1}
                    attack={pokemon.attack}
                    defense={pokemon.defense}/>)
                }
                </div>
            </div>
        )
    }
}
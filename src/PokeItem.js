import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                <p className='name'>{this.props.name}</p>
                <img className='image' src={this.props.image} alt={this.props.name} />
                <p className='type'>Primary Type: {this.props.type_1}</p>
                <p className='egg-group'>Egg Type: {this.props.egg_group_1}</p>
                <p className="attack">Attack: {this.props.attack}</p>
                <p className="defense">Defense: {this.props.defense}</p>
            </div>
        )
    }
}

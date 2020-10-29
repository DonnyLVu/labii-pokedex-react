import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                <div className='name'>{this.props.name}</div>
                <img className='image' src={this.props.image} alt={this.props.name} />
                <div className='type'>Primary Type: {this.props.type_1}</div>
                <div className='egg-group'>Egg Type: {this.props.egg_group_1}</div>
                <div className="attack">Attack: {this.props.attack}</div>
                <div className="defense">Defense: {this.props.defense}</div>
            </div>
        )
    }
}

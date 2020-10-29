import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                <div className='name'>Name: {this.props.name}</div>
                <img className='image' src={this.props.image} alt={this.props.name} />
                <div className='type1'>Primary Type: {this.props.type_1}</div>
                <div className='type2'>Secondary Type: {this.props.type_2}</div>
                <div className="attack">{this.props.attack}</div>
                <div className="defence">{this.props.defence}</div>
            </div>
        )
    }
}

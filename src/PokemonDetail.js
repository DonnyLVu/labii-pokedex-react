import './App.css';
import fetch from 'superagent';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import SearchBar from './SearchBar'
// import PokeList from './PokeList'
// import Sort from './Sort';
import { Link } from 'react-router-dom';



export default class Home extends React.Component {
  state = {
  type_1: '',
  egg_group_1: '',
  pokeArray: [],
}

componentDidMount = async () => {
  await this.fetchPokemon();
}

fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
    this.setState({ pokeArray: response.body.results })
}
// Get ID of pokemonData

    render() {
        return (
            <div className="image-item">
                <Header/>
                <Link to="/" className="links" >Home</Link>
                <Link to="/SearchPage" className="links" >Search Page</Link>


                <p>{this.props.pokemon}</p>
                <img className="pokemon-image" src={this.props.url_image} alt='pokemon' />
                ----Type 1 and 2----
                <p>Type 1: {this.props.type_1}</p>
                <p>Type 2: {this.props.type_2}</p>
                ------Ability-----
                <p>Ability 1: {this.props.ability_1}</p>
                <p>Ability 2: {this.props.ability_2}</p>
                ----Egg Groups----
                <p>Shape: {this.props.egg_group_1}</p>
                <p>Attack: {this.props.egg_group_2}</p>
                ------Shape------
                <p>Shape: {this.props.shape}</p>
                ------Stats-------
                <p>Health Points: {this.props.hp}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
                <p>Speed: {this.props.speed}</p>
                <p>Special Attack: {this.props.special_attack}</p>
                <p>Special Defense: {this.props.defense}</p>
                <Footer/>
            </div>
        )
    }
}
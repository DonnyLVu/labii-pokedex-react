import './App.css';
import fetch from 'superagent';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import PokeList from './PokeList'
import Sort from './Sort';
import { Link } from 'react-router-dom';



export default class Home extends React.Component {
  state = {
  type_1: '',
  egg_group_1: '',
  change:'',
  submit:'',
  pokeArray: [],
  pageNumber: 1,
  loading: true,
}

handleChangeType = (e) => {
  this.setState({
    type_1: e.target.value,
  })
}
handleChangeEgg = (e) => {
  this.setState({
    egg_group_1: e.target.value,
  })
}
handleChange = async (e) => {
  e.preventDefault()
  this.setState({
    change: e.target.value,
  })
  await this.fetchPokemon();
}

handleChangeSubmit = async (e) => {
  this.fetchPokemon();
  e.preventDefault()
  this.setState({
    submit: this.state.change,
  })
  await this.fetchPokemon();
}


componentDidMount = async () => {
  await this.fetchPokemon();
}

fetchPokemon = async () => {
  this.setState({ loading: true })
  const response = await fetch.get(`https:alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.submit}&type_1=${this.state.type_1}&page=${this.state.pageNumber}&perPage=20`);
  this.setState({ pokeArray: response.body.results , loading: true,count: response.body.count})
}

handleIncrement = async (e) => {
  await this.setState({
    pageNumber: this.state.pageNumber +1,
  })
  await this.fetchPokemon();
}
handleDecrement = async (e) => {
  await this.setState({
    pageNumber: this.state.pageNumber - 1,
  })
  await this.fetchPokemon();
}

  render() {
    return (
      <div className="App">
        <Header/>
        <Link to="/" className="links" >Home</Link>
        <Link to="/PokemonDetail/pokeDetail" className="links" >Detail Page</Link>
        <Link to="/SearchPage" className="links" >SearchPage</Link>
        <div className="page-turn">
          <button onClick={this.handleDecrement} disabled={this.state.pageNumber === 1}>Prev</button>
          <button onClick={this.handleIncrement} disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>Next</button>
          <br />
          <p>Page {this.state.pageNumber} of {Math.ceil(this.state.count / 20)} </p>
        </div>
        <SearchBar  handleChange={this.handleChange} handleChangeSubmit={this.handleChangeSubmit} pokeData={this.state.pokeArray}/>
        Search Bar Above
        <Sort handleChangeType={this.handleChangeType} handleChangeEgg={this.handleChangeEgg}/>
        <PokeList pokeData={this.state.pokeArray} type={this.state.type_1} egg={this.state.egg_group_1} submitProp={this.state.submit} />
        <Footer/>
      </div>
    )
  }
}
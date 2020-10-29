import './App.css';
import request from 'superagent';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import PokeList from './PokeList'
import Data from './Data';
import Sort from './Sort';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {

  state = {
  type_1: '',
  egg_group_1: '',
  change:'',
  submit:'',
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
handleChange = (e) => {
  e.preventDefault()  
  this.setState({
    change: e.target.value,
  })
}

handleChangeSubmit = (e) => {
  e.preventDefault()
  this.setState({
    submit: this.state.change,
  })
}

  render() {
    return (
      <div className="App">
        <Header/>
        <Link to="/" className="links" >Home</Link>
        <Link to="/SearchPage" className="links" >Search Page</Link>

        
        <SearchBar  handleChange={this.handleChange} handleChangeSubmit={this.handleChangeSubmit} />
        Search Bar Above
        <Sort handleChangeType={this.handleChangeType} handleChangeEgg={this.handleChangeEgg}/>
        <PokeList pokeData={Data} type={this.state.type_1} egg={this.state.egg_group_1} submitProp={this.state.submit} />
        <Footer/>
      </div>
    )
  }
}
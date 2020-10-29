import './App.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import PokeList from './PokeList'
import data from './Data.js';



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        Hello world!
        <SearchBar/>
        Bar Above
        <PokeList pokemon={data} />

        
        <Footer/>
      </div>
    )
  }
}
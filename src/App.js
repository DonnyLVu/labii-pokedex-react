import './App.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        Hello world!
        <SearchBar/>
        Bar Above


        
        <Footer/>
      </div>
    )
  }
}
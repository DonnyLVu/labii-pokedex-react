import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import PokemonDetail from './PokemonDetail.js';
import SearchPage from './SearchPage.js';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <Link to="/" className="links" >Home</Link>
                        <Link to="/PokemonDetail" className="links" >PokemonDetail</Link>
                        <Link to="/SearchPage" className="links" >SearchPage</Link>
                    </ul>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/PokemonDetail/pokeDetail" 
                            exact
                            render={(routerProps) => <PokemonDetail {...routerProps} />} 
                        />
                        <Route 
                            path="/SearchPage"
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
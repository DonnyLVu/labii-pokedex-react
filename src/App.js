import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import SearchPage from './SearchPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
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
import React, { Component } from 'react'


// 2 dropdowns for pokemon Ascending and decending


export default class Sort extends Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleChangeType}>
                    <option value="">Show All Types</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="dragon">dragon</option>
                    <option value="normal">normal</option>
                    <option value="flying">flying</option>
                    <option value="bug">bug</option>
                    <option value="poison">poison</option>
                </select>
                
                <select onChange={this.props.handleChangeEgg}>
                    <option value="">Show All Egg Types</option>
                    <option value="monster">monster</option>
                    <option value="bug">bug</option>
                    <option value="flying">flying</option>
                </select>
            </div>
        )
    }
}

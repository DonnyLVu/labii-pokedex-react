import React, { Component } from 'react'


// 2 dropdowns for pokemon Ascending and decending


export default class Sort extends Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleChangeType}>
                    <option value="">Show All Primary Types</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="dragon">dragon</option>
                    <option value="normal">normal</option>
                    <option value="flying">flying</option>
                    <option value="bug">bug</option>
                    <option value="fighting">fighting</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                </select>
                
                <select onChange={this.props.handleChangeEgg}>
                    <option value="">Show All Egg Types</option>
                    <option value="monster">monster</option>
                    <option value="bug">bug</option>
                    <option value="flying">flying</option>
                    <option value="indeterminate">indeterminate</option>
                    <option value="mineral">mineral</option>
                    <option value="water1">water1</option>
                    <option value="ground">ground</option>
                    <option value="no-eggs">no-eggs</option>
                    <option value="fairy">fairy</option>
                    <option value="plant">plant</option>
                    <option value="humanshape">humanshape</option>
                    <option value="water3">water3</option>
                    <option value="water2">water2</option>
                    <option value="ditto">ditto</option>
                    <option value="dragon">dragon</option>
                </select>
            </div>
        )
    }
}

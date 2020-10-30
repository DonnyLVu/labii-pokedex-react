import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                 <form onSubmit={this.props.handleChangeSubmit}>
                     <input type="text" onChange={this.props.handleChange} />
                     <button>Click me</button>
                 </form>
            </div>
        )
    }
}

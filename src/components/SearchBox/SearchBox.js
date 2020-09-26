import React from 'react';
import './SearchBox.css'

//Captures user's search term.
export default class SearchBox extends React.Component {
    render() {
        return (
            <div className="SearchBox">
                <label htmlFor="search__term">Search: </label>
                <input 
                    type="text" id="search__term" 
                    placeholder="Search term"
                    value={this.props.searchTerm}
                    onChange={e => this.props.handleUpdateSearchTerm(e.target.value)}
                />
                <button 
                    className="search__button"
                    
                >Search</button>
            </div>

        )
    }
}
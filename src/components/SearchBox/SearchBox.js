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
                />
                <button 
                    className="search__button">Search</button>
            </div>

        )
    }
}
import React from 'react';
import './SearchBox.css'

//Captures user's search term.
export default function SearchBox(props) {

    return (
        <form className="SearchBox" onSubmit={(e) => {props.handleSearchSubmit(e)}}>
            <label htmlFor="search__term">Search: </label>
            <input
                type="text" id="search__term"
                placeholder="Search term"
                required
                value={props.searchTerm}
                onChange={e => props.handleUpdateSearchTerm(e.target.value)}
            />
            <button
                className="search__button"                
            >Search</button>
        </form>
    )
}
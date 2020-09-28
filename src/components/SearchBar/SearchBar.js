import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';
import './SearchBar.css'

//Receives user input for filtering options.
export default function SearchBar(props) {

    return (
        <div className="SearchBar">
            <div className="SearchBar__heading">
                <h1>Google Book Search</h1>
            </div>
            <div className="SearchBar__controls">
                <SearchBox
                    searchTerm={props.data.searchTerm}
                    handleUpdateSearchTerm={props.handleUpdateSearchTerm}
                    handleSearchSubmit={props.handleSearchSubmit}
                />
                <FilterOptions
                    handleUpdatePrint={props.handleUpdatePrint}
                    handleUpdateType={props.handleUpdateType}
                />
            </div>
        </div>
    )

}
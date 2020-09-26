import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';
import './SearchBar.css'

//Receives user input for filtering options.
export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar__heading">
                    <h1>Google Book Search</h1>
                </div>
                <div className="SearchBar__controls">
                    <SearchBox
                        searchTerm={this.props.searchTerm}
                        handleUpdateSearchTerm={this.props.handleUpdateSearchTerm}
                        handleSearchSubmit={this.props.handleSearchSubmit}                        
                    />                    
                    <FilterOptions 
                        handleUpdatePrint={this.props.handleUpdatePrint}
                        handleUpdateType={this.props.handleUpdateType}
                    />
                </div>
            </div>
        )
    }
}
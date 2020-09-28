import React from 'react';
import './FilterOptions.css'

//Displays user's filter choice and captures user input.
export default function FilterOptions(props) {

    return (
        <div className="FilterOptions">
            <form>
                <label htmlFor="print__type">Print Type: </label>
                <select id="print__type" name="print__type"
                    onChange={e => props.handleUpdatePrint(e.target.value)}>
                    <option key="0" value="">All</option>
                    <option key="1" value="BOOK">Book</option>
                    <option key="2" value="MAGAZINE">Magazine</option>
                </select>
                <label htmlFor="book__type">Book Type: </label>
                <select id="book__type" name="book__type"
                    onChange={e => props.handleUpdateType(e.target.value)}>
                    <option key="0" value="">No filter</option>
                    <option key="1" value="true">is e-book</option>
                    <option key="2" value="false">is not e-book</option>
                </select>
            </form>
        </div>
    )
}
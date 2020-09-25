import React from 'react';
import './FilterOptions.css'

//Displays user's filter choice and captures user input.
export default class FilterOptions extends React.Component {
    render() {
        const printTypes = 'test';
        const bookTypes = 'test';
        return (
            <div className="FilterOptions">
                <form>
                    <label htmlFor="print__type">Print Type: </label>
                    <select id="print__type" name="print__type">
                        <option value="None">All</option>
                        {printTypes}
                    </select>
                    <label htmlFor="book__type">Book Type: </label>
                    <select id="book__type" name="book__type">
                        <option value="None">No filter</option>
                        {bookTypes}
                    </select>
                </form>

            </div>
        )
    }
}
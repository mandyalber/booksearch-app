import React from 'react';
import './FilterOptions.css'

//Displays user's filter choice and captures user input.
export default function FilterOptions(props) {

    const printTypes = (['books', 'magazines'])
        .map((printType, i) => <option value={printType} key={i}>{printType}</option>);
    const bookTypes = (['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'])
        .map((bookType, i) => <option value={bookType} key={i}>{bookType}</option>);

    return (
        <div className="FilterOptions">
            <form>
                <label htmlFor="print__type">Print Type: </label>
                <select id="print__type" name="print__type"
                    onChange={e => props.handleUpdatePrint(e.target.value)}
                >
                    <option value="">All</option>
                    {printTypes}
                </select>
                <label htmlFor="book__type">Book Type: </label>
                <select id="book__type" name="book__type"
                    onChange={e => props.handleUpdateType(e.target.value)}
                >
                    <option value="">No filter</option>
                    {bookTypes}
                </select>
            </form>
        </div>
    )
}
import React from 'react';
import BookItem from '../BookItem/BookItem'
import './BookList.css'

//Displays the data in the array of books, applies filters that the user input in the SearchBar
export default class BookList extends React.Component {


    render() {
        //const { filterOptionPrint, filterOptionType } = this.props;
        const list = this.props.books
            .map((book, key) => <BookItem {...book} key={key} />);
        return (
            <div className="BookList">
                {list}
            </div>
        )

    }
}
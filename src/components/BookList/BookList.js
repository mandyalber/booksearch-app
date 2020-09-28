import React from 'react';
import BookItem from '../BookItem/BookItem'
import './BookList.css'

//Displays the data in the array of books, applies filters that the user input in the SearchBar
export default function BookList (props) { 

    const { printTypeFilter, bookTypeFilter } = props;
    const list = props.books
        .filter((book => book.volumeInfo.printType === printTypeFilter || printTypeFilter === '') &&
            (book => book.saleInfo.isEbook === bookTypeFilter || bookTypeFilter === ''||console.log(book.saleInfo.isEbook,bookTypeFilter)))
        .map((book, key) => <BookItem {...book} key={key} />);
    console.log(list)


    return (
        <div className="BookList">
            {list}
        </div>
    )


}
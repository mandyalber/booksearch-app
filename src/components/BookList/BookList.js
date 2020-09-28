import React from 'react';
import BookItem from '../BookItem/BookItem'
import './BookList.css'

//Displays the data in the array of books, applies filters that the user input in the SearchBar
export default function BookList (props) { 
    console.log(props.data)
    const { filterOptionPrint, filterOptionType } = props.data;
    const list = props.data.books
        .filter((book => book.volumeInfo.printType === filterOptionPrint || filterOptionPrint === '') &&
            (book => book.saleInfo.isEbook === filterOptionType || filterOptionType === ''||console.log(book.saleInfo.isEbook,filterOptionType)))
        .map((book, key) => <BookItem {...book} key={key} />);
    console.log(list)


    return (
        <div className="BookList">
            {list}
        </div>
    )


}
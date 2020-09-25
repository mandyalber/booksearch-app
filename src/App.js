import React from 'react';
import BookList from './components/BookList/BookList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  //state
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: '',
      filterOptionPrint: 'All',
      filterOptionType: 'No filter'
    };
  }

  //componentDidMount(){api call}
  //handler(s)

  render() {
    return (
      <div className="App">
        <SearchBar />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

export default App;
/*
    Provide a search form to allow users to search for books by some search term that they enter.

    Allow filters such as type of book or whether the book is a free ebook or not.

    Display the search result in list and optionally allow the user to click a result to see further details of the book.

    Use the Google Books API to perform the search
*/
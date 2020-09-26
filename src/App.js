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
      filterOptionPrint: '',
      filterOptionType: ''
    };
  }

  //componentDidMount(){api call}
  //handler(s)
  handleUpdateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }
  handleUpdatePrint(print) {
    this.setState({
      filterOptionPrint: print
    })
  }
  handleUpdateType(type) {
    this.setState({
      filterOptionType: type
    })
  }


 
  render() {
    return (
      <div className="App">
        <SearchBar 
          searchTerm={this.state.searchTerm} 
          handleUpdateSearchTerm={term=>this.handleUpdateSearchTerm(term)}
          filterOptionPrint={this.state.filterOptionPrint}
          filterOptionType={this.state.filterOptionType}
          handleUpdatePrint={print=>this.handleUpdatePrint(print)}
          handleUpdateType={type=>this.handleUpdateType(type)}
        />
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
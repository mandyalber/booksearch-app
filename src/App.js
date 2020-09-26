import React from 'react';
import BookList from './components/BookList/BookList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      books: [],     
      searchTerm: '',
      filterOptionPrint: '',
      filterOptionType: ''
    };
  }
  
  state = {
    books: []
}

  //format params
formatQueryParams(params) {
const queryItems = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
return queryItems.join('&');
}

handleSearchSubmit(event){ 
  event.preventDefault()
  this.getBooks(this.state.searchTerm)
}
//function for api call (pass params)
getBooks(term) {
const params = {
  q: term,
  api_key: 'AIzaSyAACWetPYqwoeQkZl0dUj0Hxtn34aGt198'
}

const searchURL = 'https://www.googleapis.com/books/v1/volumes'
const queryString = this.formatQueryParams(params)
const url = searchURL + '?' + queryString

console.log(url)

fetch(url)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data => {
    const books = data.items
    this.setState({
      books
    })  
        console.log(books);
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
    console.log(this.state.error)})
  
//set state of books to response data
}

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
          handleUpdateSearchTerm={term => this.handleUpdateSearchTerm(term)}
          handleSearchSubmit={event => this.handleSearchSubmit(event)}
          filterOptionPrint={this.state.filterOptionPrint}
          filterOptionType={this.state.filterOptionType}
          handleUpdatePrint={print => this.handleUpdatePrint(print)}
          handleUpdateType={type => this.handleUpdateType(type)}
        />
        <BookList 
          printTypeFilter={this.state.filterOptionPrint} 
          bookTypeFilter={this.state.filterOptionType} 
        />
      </div>
    );
  }
}

export default App;
/*
    Display the search result in list and optionally allow the user to click a result to see further details of the book.

*/
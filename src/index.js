import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const BOOKS = [
  {
    title: 'title1',
    author: 'author1',
    price: 10,
    description: 'book description sample words, la '
  },
  {
    title: 'title2',
    author: 'author2',
    price: 150,
    description: 'book description sample words, la la '
  },
  {
    title: 'title3',
    author: 'author3',
    price: 50,
    description: 'book description sample words, la la la '
  },

]

ReactDOM.render(
  <App books={BOOKS}/>,
  document.getElementById('root')
);

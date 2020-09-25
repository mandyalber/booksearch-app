import React from 'react';
import './BookItem.css'

//Displays a single book's details 
export default class BookItem extends React.Component {
    render() {
        return (
            <div className="ListItem">
                <div className="ListItem__content">
        <           h2 className="ListItem__title">{this.props.title}</h2>
                    <div className="ListItem__author">Author: {this.props.author}</div>
                    <div className="ListItem__price">Price: ${this.props.price}</div>
                    <div className="ListItem__desc">{this.props.description}</div>
                </div>
            </div>
        )
    }
}
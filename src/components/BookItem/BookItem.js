import React from 'react';
import './BookItem.css'

//Displays a single book's details 
export default function BookItem(props) {

    let price = 0
    if(props.saleInfo.listPrice){
        price = props.saleInfo.listPrice.amount;
    }
    let text = ''
    if(props.searchInfo){
        text = props.searchInfo.textSnippet;
    }
    
    let imgSrc = ''
    if(props.volumeInfo.imageLinks){
        imgSrc = props.volumeInfo.imageLinks.thumbnail;
    }

    return (
        <div className="ListItem">
            <img src={imgSrc} alt=""/>
            <div className="ListItem__content">               
                <h2 className="ListItem__title">{props.volumeInfo.title}</h2>
                <div className="ListItem__author">Author: {props.volumeInfo.authors}</div>
                <div className="ListItem__price">Price: ${price}</div>
                <div className="ListItem__desc">{text
                }</div>
            </div>
        </div>
    )

}
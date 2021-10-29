import React, {useState} from 'react';
import {data} from './data';
import Form from './Form';
import Cards from './Cards';
import './Structure.css';
import App from './App';

const Structure = () => {
    const [cardNumber, setCardNumber] = useState(1);

    return (
        <div className="full-body">
            <div className="nav-bar"> Home </div>
            <Cards cardNumber={cardNumber} />
            
            <div className="edit-buttons">
                <button className="previous-button" 
                    onClick={() => {
                    if(cardNumber <= 1) {
                        alert("Cannot go lower than this")
                    } else {setCardNumber(cardNumber - 1)}}} > Previous </button>


                <button className="blue-buttons"> Edit </button>
                <button className="blue-buttons"> Delete </button>
                <button className="blue-buttons"  id="add-form"> New  </button>
                


                <button className="next-button" onClick={() => {
                    if(cardNumber >= cardNumber.length) {
                        alert("This is the end!")
                    } else {setCardNumber(cardNumber + 1)}}} > Next </button>
                
            </div>

            
        </div>
    )
}

export default Structure
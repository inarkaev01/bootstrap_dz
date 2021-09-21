import React from 'react';
function Button(props) {

    return (
        <button className={`btn ${props.item.bought ? 'added' : ' '}`} onClick={() => props.setBought(props.itemId)} >
            {props.item.bought ? "Добавлено в корзину" : "Добавить корзину" }
        </button>
    );
}

export default Button;
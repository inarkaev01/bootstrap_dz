import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <div className="col p-0">
             <div className="card">
              <div className="card-image">
               <img src={props.item.image} alt=""/>
              </div>
              <div className="card-info">
               <div className="card-name">{props.item.name}</div>
               <div className="card-rating">{props.item.rating}</div>
               <div className="card-price">{props.item.price}</div>
                  <Button setBought={props.setBought} item={props.item} itemId={props.item.id} itemBought={props.item.bought}/>
              </div>
             </div>
        </div>

    );
}

export default Card;
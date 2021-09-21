import React, {useState} from "react";
import Card from "./Card";

function Content(props) {

    return (
          <div className="content">
              <div className="container">
                  <div className="row">
              {props.database.map((item, index)=>{
                  return (<Card
                      key={index}
                      item={item}
                      setBought={props.setBought}
                      itemId={item.id}
                      itemBought={item.bought}/>)
              })}
                  </div>
              </div>

        </div>
    );
}

export default Content;
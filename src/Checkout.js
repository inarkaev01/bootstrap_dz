import React from 'react';
import Cart from './shopping-cart-solid.8bf1af37.svg'

function Checkout(props) {



        return (
            <div className="col-2">
                <div className="checkout">
                    <a href="#">
                    <img src={Cart}/>
                    <div className="counter">
                        {props.database.filter(item => item.bought). length}

                    </div>
                    </a>
                   <a href="#" className="logout">выход</a>
                </div>
            </div>
    );
}

export default Checkout;
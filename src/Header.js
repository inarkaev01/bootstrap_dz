import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";
import Checkout from "./Checkout";

function Header(props) {
    return (
        <div className="header">
          <div className="container">
            <div className="row mt-3 mb-5">
            <Logo/>
            <Menu/>
            <Checkout database={props.database}/>
            </div>
          </div>
        </div>
    );
}

export default Header;
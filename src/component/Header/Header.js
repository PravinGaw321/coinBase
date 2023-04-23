import React from "react";
import '../Header/Header.css';

const Header=()=>{
    return(
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    <span>Coinbase</span>
                </div>
                <div className="rightside">
                    <button>Register</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
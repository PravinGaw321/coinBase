import React from "react";
import { Link } from "react-router-dom";

const CoinList=(props)=>{
    const {res} = props || {};
    return(
        <Link to={`coindetail/${res?.id}`} className="redirect-link">
            <li key={res?.id}>
                <span className="id">
                    {res?.id}
                </span>
                <div className="symbol">
                    <img src={res?.image?.small} alt="" />
                </div>
                <span className="name">
                    {res?.name}
                </span>
            </li>
        </Link>
    )
}

export default CoinList;
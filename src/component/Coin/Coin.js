import React, { useEffect, useState } from "react";
import './Coin.css';
import { FetchcoinInfo } from "../../redux/CoinReducer";
import { useDispatch, useSelector } from "react-redux";

const Coin=()=>{
    const dispatch = useDispatch();
    const statelist = useSelector((state)=> state.coins.value);
    console.log(statelist);
    
    useEffect(()=>{
        dispatch(FetchcoinInfo());
    }, [dispatch])


    return(
        <React.Fragment>
            <div className="coins">
                <ul>
                    {/* {statelist.map((res)=>{
                        console.log(res);
                    })} */}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Coin;
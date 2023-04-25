import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fetchcoindetail } from "../../redux/CoinDetails";

const Coindetails=()=>{
    const dispatch = useDispatch();
    const {detailloader, coindetail, coindetailerror} = useSelector((state)=> state.coindetail);
    console.log(detailloader, coindetail, coindetailerror);

    const {coinid} = useParams();
    console.log(coinid);
    useEffect(()=>{
        dispatch(Fetchcoindetail(coinid))
    }, [])
    return(
        <React.Fragment>
            <div>hello world</div>
        </React.Fragment>
    )
}

export default Coindetails;
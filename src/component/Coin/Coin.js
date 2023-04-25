import React, { useEffect, useState } from "react";
import './Coin.css';
import { FetchcoinInfo, FetchcoinCategory, removeCoinList, removeCategoryList } from "../../redux/CoinReducer";
import { useDispatch, useSelector } from "react-redux";


const Coin = () => {
    const dispatch = useDispatch();
    const { coinlistLoading, coinlistData, coinlistError, coincategoryLoading, coincategorydata, coincategoryError } = useSelector((state) => state.coins);
    // console.log(coincategoryLoading, coincategorydata, coincategoryError, coinlistLoading, coinlistData, coinlistError);
    const [openpanel, setopenpanel] = useState(false);

    useEffect(() => {
        dispatch(FetchcoinInfo());
        dispatch(FetchcoinCategory());
        return ()=>{
            dispatch(removeCoinList());
            dispatch(removeCategoryList());
        }
    }, [dispatch])


    return (
        <React.Fragment>
            <div className="coins accordion">
                <div className="openbtn" onClick={()=> setopenpanel(!openpanel)}>
                <h1 className="coinheading">Coin Category</h1>
                    </div>
                    {openpanel && 
                <div className="coincategory contentarea">
                        {coincategoryLoading ? <span>Loading...</span>:
                         <>
                            {coincategorydata?.length > 0 ? <ul>
                                {coincategorydata?.map((res)=>{
                                    return(
                                        <li key={res?.category_id}>
                                            <span>{res?.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>: <span>No list of Items</span>}
                        </>}
                </div>
}
                <div className="coinlist">
                <h1 className="coinheading">Coin List</h1>
                        {coinlistLoading ? <span>Loading...</span> : <>
                            {!coinlistData?.length > 0 ? <span>No Items available.</span> :
                                <ul>
                                    {coinlistData.slice(0, 10).map((res) => {
                                        return (
                                            <li key={res?.id}>
                                                   <span className="id">
                                                    {res?.id}
                                                    </span>
                                                    <div className="symbol">
                                                       {res?.symbol}
                                                    </div>
                                                    <span className="name">
                                                    {res?.name}
                                                    </span>
                                            </li>
                                         ) 
                                     })} 
                                </ul>}
                        </>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Coin;
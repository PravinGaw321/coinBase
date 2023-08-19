import React, { useEffect, useState } from "react";
import './Coin.css';
import { FetchcoinInfo, FetchcoinCategory, removeCoinList, removeCategoryList } from "../../redux/CoinReducer";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import arrowimage from '../../Images/dropdown.png';
import arrowimageup from '../../Images/dropdownupperside.png';
import Search from "../SearchBar/Search";
import Badge from "../../CommonCompoennt/Badge";
import CoinList from "../CoinList/Coinlist";


const Coin = () => {
    const dispatch = useDispatch();
    const { coinlistLoading, coinlistData, coinlistError, coincategoryLoading, coincategorydata, coincategoryError } = useSelector((state) => state.coins);
    // console.log(coincategoryLoading, coincategorydata, coincategoryError, coinlistLoading, coinlistData, coinlistError);
    const [openpanel, setopenpanel] = useState(true);
    const [datalist, setdataList] = useState([]);
    const [searchresult, setnosearchresult] = useState(false);

    useEffect(() => {
        dispatch(FetchcoinInfo());
        // dispatch(FetchcoinCategory());
        return ()=>{
            dispatch(removeCoinList());
            dispatch(removeCategoryList());
        }
    }, [dispatch])

    useEffect(()=>{
        console.log('coinlist 1', datalist);
        setdataList(coinlistData);
        console.log('coinlist 2', datalist);
    }, [coinlistData])

    const Coinsearch=(e)=>{
        const query = e.target.value;
        if(query === ""){
            setdataList(coinlistData);
        }
        else{
            const updatedList = coinlistData.filter((item)=>{
                return item.name.toLowerCase().includes(query.toLowerCase());
            })
            // console.log('updatelist', updatedList);
            if(updatedList.length > 0){
                setdataList(updatedList);
                setnosearchresult(false);
            }
            else{
                setdataList([])
                setnosearchresult(true);
            }
            // updatedList.length > 0 ? setdataList(updatedList) : setnosearchresult(true);
        }
    }

        


    return (
        <React.Fragment>
            <div className="coins accordion">
                <div className="openbtn" onClick={()=> setopenpanel(!openpanel)}>
                <div className="titleheader">
                <h1 className="coinheading">Coin Category</h1>
                <img src={openpanel ? arrowimageup : arrowimage} alt="" width={25} height={15}/>
                </div>
                    </div>
                    {openpanel && 
                <div className="coincategory contentarea">
                        {coincategoryLoading ? <Skeleton baseColor="#ebebeb" count={50} highlightColor="#f5f5f5" width={100} height={26} enableAnimation={true} containerClassName="skeleton-category"/>:
                         <>
                            {coincategorydata?.length > 0 ? <ul>
                                {coincategorydata?.map((res)=>{
                                    return(
                                       <Badge data={res}/>
                                    )
                                })}
                            </ul>: <span>No list of Items</span>}
                        </>}
                </div>
}
                <div className="coinlist">
                <h1 className="coinheading">Coin List</h1>
                <Search placeholder={"Coin Search here..."} width={"30%"} onChange={Coinsearch}/>
                        {coinlistLoading ? <Skeleton count={7} enableAnimation={true} direction={"ltr"} highlightColor="#f5f5f5" containerClassName="skeleton"/> : <>
                            {datalist?.length > 0 &&
                                <ul>
                                {datalist?.map((res) => {

                                    return (
                                        <CoinList res={res}/>
                                    )
                                })}
                                </ul>
                                }
                                
                        </>}
                    {searchresult && <span>No Search Result found...</span>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Coin;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fetchcoindetail, removeCoindetail } from "../../redux/CoinDetails";
import '../Coindetails/Coindetails.css';
import NoImageLoad from '../../Images/NoImageLoad.webp';
import ReactLoading from 'react-loading';
import ModalView from "../Modal/Modal";
import Home from '../../Images/Home.png';
import Github from '../../Images/Github.png';
import BlockChain from '../../Images/BlockChain.png';
import Category from '../../Images/Category.png';
import Market from '../../Images/Market.png';
import Price from '../../Images/Price.png';
import Dropdown from "../Dropdown/Dropdown";
import Prize from "../Prize/Prize";



const Coindetails = () => {
    const dispatch = useDispatch();
    const { detailloader, coindetail, coindetailerror } = useSelector((state) => state.coindetail);
    console.log(detailloader, coindetail, coindetailerror);
    const { name, image, description, categories, links, market_data } = coindetail || {};
    const { coinid } = useParams();
    // console.log(coinid);

    const [country, setcountry] = useState([]);
    const [countrybased, setcountrybased] = useState('');
    const [marketcap, setmarketcap] = useState([]);
    const [capvalue, setcapvalue] = useState('');
    useEffect(() => {
        dispatch(Fetchcoindetail(coinid))
    }, [dispatch])

    useEffect(() => {
        const current_price = Object?.entries(market_data?.current_price || {});
        console.log('current_price', current_price);   
        let data = current_price?.map(([key, val]) => {
            return [key, val]
        })
        setcountry(data);
        setcountrybased(data[0]?.[1])
        // console.log('datat', data[0][1])

        const market_cap = Object.entries(market_data?.market_cap || {});
        console.log('market_cap', market_cap);
        let data1 = market_cap?.map(([key, val]) => {
            return [key, val]
        })
        setmarketcap(data1);
        setcapvalue(data1[0]?.[1])
        // console.log('datat', data1[0][1])
    }, [market_data])

    return (
        <React.Fragment>
            <div className="coindetails" style={{minHeight: detailloader? 'calc(100vh - 140px)': '', display: detailloader ? 'flex': '', alignItems: detailloader ? 'center': ''}}>
                {
                    detailloader ? <ReactLoading type={"spinningBubbles"} color={'lightgreen'} height={70} width={70} className="react-loader"/> :
                    coindetailerror ? <ModalView errortext={"Error While Fetching Data..."} openmodal={true}/> :
                        <div className="coinportfolio" >
                            <div className="coinheader">
                                <div className="image-area">
                                    {image?.large ? <img src={image?.large} alt="image" /> : <img src={NoImageLoad} alt="no-image-load" />}
                                </div>
                                <div className="info">
                                    <span className="name">
                                        {name}
                                    </span>
                                    <span className="description">
                                        {description?.en ? description?.en : <span className="section-heading_sub">No Description Available..</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="details">
                                <div className="categories">
                                <img src={Category} alt="home-icon" className="title-icon"/><span className="section-heading">Categories: -</span>
                                    <ul>
                                        {categories?.length !== 0 ? categories?.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{data}</span>
                                                </li>
                                            )
                                        }) : <span className="section-heading_sub">No Categories Available..</span>
                                        }
                                    </ul>
                                </div>
                                <div className="links">
                                    <img src={Home} alt="home-icon" className="title-icon"/><span className="section-heading">Homepage:-</span>
                                    <div className="homepage_link">
                                        {links?.homepage[0].length !== 0 ? <a href={links?.homepage[0]} target="_blank" alt="homepagelink">{links?.homepage[0]}</a> : <span className="section-heading_sub">No HomePage Link Available..</span>}
                                    </div>
                                    <div className="blockchain">
                                    <img src={BlockChain} alt="home-icon" className="title-icon"/><span className="section-heading">BlockChain:-</span>
                                        <ul>
                                            {
                                                links?.blockchain_site.length !== 0 ? links?.blockchain_site.slice(0, 3).map((res) => {
                                                    return (
                                                        <li>
                                                            <a href={res} target="_blank" alt='blockchain_site'>{res ? res : <span style={{color:'#fff'}}>---</span>}</a>
                                                        </li>
                                                    )
                                                }) : <span className="section-heading_sub">No BlockChain Info Available..</span>
                                            }
                                        </ul>
                                    </div>
                                    <div className="gitrepo">
                                    <img src={Github} alt="home-icon" className="title-icon"/><span className="section-heading">Github:-</span>
                                        <ul>
                                            {
                                                links?.repos_url?.github?.length !== 0 ? links?.repos_url?.github?.map((res) => {
                                                    return (
                                                        <li>
                                                            <a href={res} target="_blank">{res ? res : <span style={{color:'#fff'}}>---</span>}</a>
                                                        </li>
                                                    )
                                                }) : <span className="section-heading_sub">No Github Info Available..</span>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="marketdata">
                                <img src={Market} alt="home-icon" className="title-icon"/><span className="section-heading">Market_data:-</span>
                                    <ul>
                                        <li className="current_price">
                                            <span className="section-heading_sub">current_price:-</span>
                                            {/* <select name="price" id="price" className="price" onChange={(e) => setcountrybased(e.target.value)}>
                                                {country?.map((res) => {
                                                    return (
                                                        <option value={res[1]}>{res[0]}</option>
                                                    )
                                                })}
                                            </select> */}
                                            <Dropdown list={country} onChange={setcountrybased}/>
                                            <span className="price mainvalue">${countrybased ? Number(countrybased).toLocaleString() : ''}</span>
                                        </li>
                                        <li className="marketcap">
                                            <span className="section-heading_sub">market_cap:-</span>
                                            <Dropdown list={marketcap} onChange={setcapvalue}/>
                                            <span className="market_cap_value mainvalue">${capvalue ? Number(capvalue).toLocaleString() : ''}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricechanges">
                                <img src={Price} alt="home-icon" className="title-icon"/><span className="section-heading">Price_changes:-</span>
                                    <ul>
                                        <Prize headline={'price_change_percentage_24h'} data={market_data?.price_change_percentage_24h}/>
                                        <Prize headline={'price_change_percentage_7d'} data={market_data?.price_change_percentage_7d}/>
                                        <Prize headline={'price_change_percentage_60d'} data={market_data?.price_change_percentage_60d}/>
                                        <Prize headline={'price_change_percentage_1y'} data={market_data?.price_change_percentage_1y}/>
                                        <Prize headline={'market_cap_change_percentage_24h'} data={market_data?.market_cap_change_percentage_24h}/>
                                    </ul>
                                </div>

                            </div>
                        </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Coindetails;
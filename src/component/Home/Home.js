import React, { useState } from "react";
import Tabs from "../Tab/Tab";
import './Home.css';
import tabs from '../../Tabsjson.json'
import Coin from "../Coin/Coin";
import Nft from "../Nft/Nft";
import Exchangerate from "../Exchange_rate/Exchange_rate";
import Trending from "../Trending/Trending";
import Search from "../SearchBar/Search";



const Home=()=>{
    const [activeTab, setActiveTab] = useState('Coin');
    const activeTabs=()=>{
        switch(activeTab){
            case 'Coin':
                return <Coin/>
                break;
            case 'NFT':
                return <Nft/>
                break;
            case 'exchange_rate':
                return <Exchangerate/>
                break;
            case 'Trending':
                return <Trending/>
                break;
            default:
                return <Coin/>
        }
    }
    const getTabs=(name)=>{
        setActiveTab(name);
    }
    return(
        <React.Fragment>
            <div className="home">
                <Search placeholder={"Search Coin here..."} width={"100%"}/>
                <div className="main-sec">
                    {
                        tabs.length > 0 && tabs?.map((res)=>{
                            return(
                                <span key={res?.name} className="tabname" onClick={()=> getTabs(res.name)} style={{background: res.name === activeTab? '#ffffff':'transparent', color: res.name === activeTab? '#000000':'#ffffff'}}>
                                    {
                                        res?.name
                                    }
                                </span>
                            )
                        })
                    }

                    <div className="split-sections">
                        {activeTabs()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
import React from "react";
import './Search.css';

const Search =(props)=>{
    const {onChange} = props || {};
    return(
        <React.Fragment>
            <div className="search-sec" style={{width: props.width}}>
                <input type="text" placeholder={props.placeholder} onChange={onChange}/>
            </div>
        </React.Fragment>
    )
}

export default Search;
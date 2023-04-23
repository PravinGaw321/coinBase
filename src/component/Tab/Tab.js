import React from "react";

const Tabs=(props)=>{
    return(
        <React.Fragment>
        <div className="tabname">
            <span>{props.name}</span>
        </div>
        </React.Fragment>
    )
}

export default Tabs;
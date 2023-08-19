import React from "react";

const Badge=(props)=>{
    const {data} = props || {};
    return(
        <li key={data?.category_id}>
        <span>{data?.name}</span>
    </li>
    )
}

export default Badge;
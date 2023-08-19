import React from "react";

const Prize = (props) => {
    const {headline, data} = props || {};
    return (
        <React.Fragment>
            <li className="price-stat">
                <span className="category">{headline}</span>
                <span className={data < 0 ? 'value negativevalue' : 'value'}>{data ? data.toFixed(2) : <span>No data available...</span>}</span>
            </li>
        </React.Fragment>
    )
}

export default Prize;
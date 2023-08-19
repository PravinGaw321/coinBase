import React from "react";

const Dropdown = (props) => {
    const {list, onChange} = props || {};
    return (
        <React.Fragment>
            <select name="market_cap" id="market_cap" onChange={(e) => onChange(e.target.value)}>
                {list?.map((res) => {
                    return (
                        <option value={res[1]}>{res[0]}</option>
                    )
                })}
            </select>
        </React.Fragment>
    )
}

export default Dropdown;
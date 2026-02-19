import React from "react";


function Small_button (props) {

return(
    <div className="button">
        <button className="btn bt_sm">{props.col1}</button>
        <button className="btn bt_sm">{props.col2}</button> 
        <button className="btn bt_sm">{props.col3}</button>
        <button className="btn bt_sm" >{props.col4}</button>
    

    </div>
)

}

export default Small_button;
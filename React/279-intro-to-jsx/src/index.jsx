import React from 'react'
import ReactDom from 'react-dom'

let age = 20 ;
const d = new Date();
let year = d.getFullYear();


ReactDom.render( 
<div> 
    <h1>Lunga is {age} years old</h1> 
    <p>COPYRIGHT  {year}</p>
</div>, document.getElementById("root"));

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (



    <>
    
        <div className="outerbody">

<div id="innerbody">
    <div id="div_screen">
        <input type="text" id="screen"/>

    </div>
    <div className="button">
        <button className="btn bt_bg clear">clear</button>
        <button className="btn bt_bg delete">delete</button>

    </div>
    <div className="button">
        <button className="btn bt_sm">7</button>
        <button className="btn bt_sm">8</button> 
        <button className="btn bt_sm">9</button>
        <button className="btn bt_sm" >/</button>
    

    </div>
    <div className="button">
        <button className="btn bt_sm">4</button>
        <button className="btn bt_sm">5</button>
        <button className="btn bt_sm">6</button>
        <button className="btn bt_sm">*</button>

    </div>
    <div className="button">
        <button className="btn bt_sm">1</button>
        <button className="btn bt_sm">2</button>
        <button className="btn bt_sm">3</button>
        <button className="btn bt_sm">-</button>

    </div>
    <div className="button">
        <button className="btn bt_sm" >.</button>
        <button className="btn bt_sm" >0</button>
        <button className="btn bt_sm equals">=</button>
        <button className="btn bt_sm" >+</button>

    </div>

</div>

</div>
    </>
  )
}

export default App

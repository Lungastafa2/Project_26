import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Small_button from '../btn-small'
import Big_button from './btn-big'

function App() {
  

  return (
    <>
        <div className="outerbody">
            <div id="innerbody">
                <div id="div_screen">
                    <input type="text" id="screen"/>

                </div>
    
                  <Big_button/>
                  <Small_button col1 = '7' col2 = '8' col3 = '9' col4 = '/'/>
                  <Small_button col1 = '4' col2 = '5' col3 = '6' col4 = '*'/>
                  <Small_button col1 = '1' col2 = '2' col3 = '3' col4 = '/'/>
                  <Small_button col1 = '.' col2 = '0' col3 = '=' col4 = '+'/>
    
              </div>

        </div>
    </>
  )
}

export default App

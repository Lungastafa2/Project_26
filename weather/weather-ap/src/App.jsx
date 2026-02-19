import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>

          <div className='innerBody'>

            <div className='upBody'>

              <input type="text" />
              <label htmlFor="">search</label>

            </div>

            <div className='middleBody'>
              <h2>Ceres </h2>
              <h4>South Afrika</h4>
              <img src="" alt="Sun" />
              <h1>22~</h1>
              <h4>Sunny</h4>

            </div>

            <div className='lowerBody'>

              <p> wind speed</p>
              <img src="" alt="imogi" />

            </div>

          
          </div>

      </div>
 
    </>
  )
}

export default App

import {useState} from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const Handler = () =>{
    setCount (count + 1)
    
  }
  
  return (
    <div>
        {/* Do not remove the main div */}

    <p>

      Button was clicked {count} time 

    </p>
    <button onClick={Handler}>
      clicked me
    </button>
      
    </div>
  )
}

export default App

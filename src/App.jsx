import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 

function App() {
  const [count, setCount] = useState(0)

  const Handler = () =>{
    setCount (count)
    
      count = (count + 1);
    
  }
  

  return (
    <>

    <p>

      Button was clicked {count} time 

    </p>
    <button onClick={Handler}>
      clicked me
    </button>
      
          
    </>
  )
}

export default App;

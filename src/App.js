import React, { useState } from 'react'
import './App.css';

const buttonStyles = {
  width: "40px",
  height: "40px",
  backgroundColor: "grey",
  fontSize: "23px",
  display: 'inline-block',
};

const textStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "grey",
  fontSize: "23px",
  color: "white",
  marginLeft: "50%",
  transform: 'translate(-50%)',
  marginTop: '30px',
  position: "relative",
  borderRadius: "25px"
};

const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div style={textStyle}>{count}</div><br />
      <button style={buttonStyles} onClick={decrement}>-</button>
      <button style={buttonStyles} onClick={increment}>+</button>
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './Message'

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setismorning] = useState(true);

  return (
    <div className={`main ${isMorning? "daylight":"nightlight"}`}>
      <h1>Good {isMorning ? "Morning" : "Night"}</h1>
      <Message count={count} />
      <button onClick={() => setCount(++count)}>Update</button>
      <button onClick={()=>setismorning(!isMorning)}>day</button>
    </div>
  );
}

export default App;

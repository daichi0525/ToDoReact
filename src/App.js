import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(10);
  const [chengecount,setChengecount] = useState(1);
  const test = () => {
    console.log("ボタンが押されました")
    console.log({count})
    // chengecount += 1
    setChengecount(chengecount + 1)
    console.log({chengecount})

  }
  return (
    <div className="App">
      React Test
      <button onClick={test}>
        ボタン
      </button>
      <br></br>
      {count}
      <br></br>
      {chengecount}
    </div>
  );
}

export default App;

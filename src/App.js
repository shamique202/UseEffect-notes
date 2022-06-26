import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [ message ] = useState('Welcome!');

// NOTES:
// The effect happens after render
// occurs within a function 
// you can update state inside useEffect
// helpful when fetching data using an API
useEffect(() => {
  console.log('useEffect called!'); // check console, this msg is displayed there 
}, []); // useEffect takes on an optional array as a 2nd argument
// the 2nd array will make useEffect run only once, otherwise it will be in an infinite loop or fetch data over again

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message}</h1>
        <h2>{ score }</h2>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          Increase score
        </button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>
          Decrease score
        </button>
        <button onClick={() => setScore(0)}>
          Reset score
        </button>
      </header>
    </div>
  );
}

export default App;

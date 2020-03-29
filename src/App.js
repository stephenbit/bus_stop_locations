import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(console.log)
  }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;

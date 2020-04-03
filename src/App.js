import React, { useEffect } from 'react';
import './App.css';
import BusStopMap from './components/map.js'

function App() {

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(console.log)
  }, [])

  return (
    <div className="App">
      <BusStopMap />
    </div>
  );
}

export default App;

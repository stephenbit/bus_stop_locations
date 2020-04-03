import React, { useEffect, useState } from 'react';
import './App.css';
import BusStopMap from './components/BusStopMap.js'

function App() {

  const [stops, setStops] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(obJOfStops => setStops(obJOfStops.busStops))
  }, [])

  return (
    <div className="App">
      <BusStopMap stops={stops}/>
    </div>
  );
}

export default App;

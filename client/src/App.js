import React, { useEffect, useState } from 'react';
import './App.css';
import BusStopMap from './components/BusStopMap.js'

function App() {

  const [stops, setStops] = useState([]);
  const [busNumberKeyLookup, setBusNumberKeyLookup] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(obJOfStops => setStops(obJOfStops.busStops))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/busServiceNumbers')
      .then(res => res.json())
      .then(busNumberKeyLookup => setBusNumberKeyLookup(busNumberKeyLookup))
  }, [])

  return (
    <div className="App">
      <BusStopMap stops={stops}/>
    </div>
  );
}

export default App;

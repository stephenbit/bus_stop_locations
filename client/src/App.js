import React, { useEffect, useState } from 'react';
import './App.css';
import BusStopMap from './components/BusStopMap.js'
import BusServiceDropdown from './components/BusServiceDropdown.js'


function App() {

  const [stops, setStops] = useState([]);
  const [busNumberLookup, setBusNumberLookup] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(obJOfStops => setStops(obJOfStops.busStops))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/busServiceNumbers')
      .then(res => res.json())
      .then(busNumberLookup => setBusNumberLookup(busNumberLookup))
  }, [])

  return (
    <div className="App">
      <BusStopMap stops={stops} busNumberLookup={busNumberLookup}/>
      <BusServiceDropdown busNumberLookup={busNumberLookup}/>
    </div>
  );
}

export default App;

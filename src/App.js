import React, { useEffect, useState } from 'react';
import './App.css';
import BusStopMap from './components/BusStopMap.js'
import BusServiceDropdown from './components/BusServiceDropdown.js'


function App() {

  const [stops, setStops] = useState([]);
  const [busNumberLookup, setBusNumberLookup] = useState({});
  const [selectedBusService, setSelectedBusService] = useState("")

  function updateSelectedBusService(busService){
    setSelectedBusService(busService)
  }

  function getFilterStopsBySelectedBusService(){
    const filteredStops = stops.filter(stop => {
      // ["11", ...]
      return stop.services.includes(selectedBusService)
      // return true 
      // "11" == ["11"] <- won't work
      // when busService ("11") is in A STOP's services
      // filteredStops = [{services: ["11"] }, {services: ["11"] }]
    })
    return filteredStops
  }

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
      <BusStopMap stops={getFilterStopsBySelectedBusService()} busNumberLookup={busNumberLookup}/>
      <BusServiceDropdown 
        busNumberLookup={busNumberLookup}
        onBusServiceChosen={updateSelectedBusService}
      />
    </div>
  );
}

export default App;

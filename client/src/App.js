import React, { useEffect, useState } from 'react';
import BusStopMap from './components/BusStopMap.js';
import BusServiceDropdown from './components/BusServiceDropdown.js';
import Sidebar from './components/Sidebar.js';
import './styles.css';

function App() {

  const [stops, setStops] = useState([]);
  const [busNumberLookup, setBusNumberLookup] = useState({});
  const [selectedBusService, setSelectedBusService] = useState("")
  const [selectedBusNumber, setSelectedBusNumber] = useState("")

  useEffect(() => {
    setSelectedBusNumber(busNumberLookup[selectedBusService])
  }, [selectedBusService])

  function updateSelectedBusService(busService){
    setSelectedBusService(busService)
  }

  function getFilterStopsBySelectedBusService(){
    const filteredStops = stops.filter(stop => {
      return stop.services.includes(selectedBusService)
    })
    return filteredStops
  }

  useEffect(() => {
    fetch('https://lothian-bus.herokuapp.com/')
      .then(res => res.json())
      .then(obJOfStops => setStops(obJOfStops.busStops))
  }, [])

  useEffect(() => {
    fetch('https://lothian-bus.herokuapp.com/busServiceNumbers')
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
      <Sidebar
        selectedBusNumber={selectedBusNumber}
      />
    </div>
  );
}

export default App;

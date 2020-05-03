import React from 'react'
import '../styles/Styles.css';

function BusServiceDropdown(
    {
        busNumberLookup,
        onBusServiceChosen
    }
    ) {

    const busServices = Object.keys(busNumberLookup);
    const options = busServices.map(busService => (
        <option
            value={busService}
            key={busService}
        >
        {busNumberLookup[busService]}
        </option>
    ))

    function onSelectChange(event) {
        onBusServiceChosen(event.target.value)
    }

    return(
        <select className='service-select'
            name="Select Bus"
            onChange={onSelectChange}
        >
        <option>Please Select a Service</option>
        {options}
        </select>
        )
}

export default BusServiceDropdown;
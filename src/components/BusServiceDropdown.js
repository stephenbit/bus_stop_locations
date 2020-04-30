import React from 'react'

function BusServiceDropdown({busNumberLookup, onBusServiceChosen}) {

    const busServices = Object.keys(busNumberLookup);
    console.log(busServices);
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
        <select
            name="Select Bus"
            style={{
                position:'fixed',
                top:50,
                zIndex:2000,
                right:100
            }}
            onChange={onSelectChange}
        >
        {options}
        </select>
    )
}

export default BusServiceDropdown;
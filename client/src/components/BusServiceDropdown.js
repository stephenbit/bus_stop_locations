import React from 'react'

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
        <select
            name="Select Bus"
            style={{
                position:'fixed',
                top:25,
                zIndex:400,
                right:50
                }}
            onChange={onSelectChange}
        >
        <option>Please Select a Service</option>
        {options}
        </select>
        )
}

export default BusServiceDropdown;
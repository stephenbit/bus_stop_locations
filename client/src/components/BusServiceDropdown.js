import React from 'react'

function BusServiceDropdown({busNumberLookup}) {
    return(
        <select
        name="Select Bus"
        style={{
            position:'fixed',
            top:50,
            zIndex:2000,
            right:100
            }}
        >
        <option>Bus 30</option>
        </select>
    )
}

export default BusServiceDropdown;
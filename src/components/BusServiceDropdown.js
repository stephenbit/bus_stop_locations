import React from 'react'

function BusServiceDropdown({busNumberLookup}) {
    return(
        <select
        name="Select Bus"
        style={{
            position:'absolute',
            marginTop:5,
            zIndex:2000,
            marginRight:0
            }}
        >
        <option>Bus 30</option>
        </select>
    )
}

export default BusServiceDropdown;
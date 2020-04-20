import React from 'react'

function BusServiceDropdown({busNumberLookup}) {
    return(
        <select
        name="Select Bus"
        style={{
            position:'absolute',
            top:50,
            marginLeft:1000,
            zIndex:2000,
            marginRight:0
            }}
        >
        <option>Bus 30</option>
        </select>
    )
}

export default BusServiceDropdown;
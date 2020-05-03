import React from 'react'
import BusServiceDropdown from './BusServiceDropdown.js'

function sidebar({selectedBusNumber}) {

return (
    <section
        style={{
            backgroundColor: 'gh',
            height:'100vh',
            width:'200px',
            position:'absolute',
            zIndex:500,
            top:0,
        }}    
    >
        <div
            style={{
                position:'absolute',
                textAlign: 'center',
                top:25,
                fontSize: 80,
                width: '120px',
                height: '120px',
                border: 'solid thick red'
                }}
                >
                {selectedBusNumber}
        </div>
        <div
            style={{
                    position:'absolute',
                    top:25,
                    fontSize:100
                    }}
        >
        {BusServiceDropdown}
        </div>
        
    </section>
    
)
    }

export default sidebar;
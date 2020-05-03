import React from 'react';
import '../styles/Styles.css';

function sidebar({selectedBusNumber}) {

return (
    <section className='sidebar'>
        <div className='number-box'>
        {selectedBusNumber}
        </div>
    </section>
    
)
    }

export default sidebar;
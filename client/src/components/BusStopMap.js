import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../styles.css';

function BusStopMap({ stops, busNumberLookup }) {

    function getCommaSeparatedBusNumbersFromServices(services) {
        let busNumbersString = ''
        for (const service of services) {
            busNumbersString += busNumberLookup[service] + ", "
        }
        return busNumbersString.slice(0, busNumbersString.length - 2)
    }

    const markers = stops.map(stop => {

        return (
            <Marker
                position={[stop.x, stop.y]}
                key={stop.stopId}
            >
                <Popup>
                    Stop name: {stop.name}
                    <br></br>
                    Busses: {getCommaSeparatedBusNumbersFromServices(stop.services)}
                </Popup>
            </Marker>
        )
    });

    const position = [55.948714, -3.199913]

    const map = (
        <Map className='map'
            center={position} zoom={11.5}>
            <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://carto.com/attributions">CARTO</a>' 
            />
            {markers}
        </Map>
    )
    return map
}

export default BusStopMap;
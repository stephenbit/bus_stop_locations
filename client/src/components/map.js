import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function BusStopMap() {
    const position = [51.505, -0.09]

    const map = (
        <Map center={position} zoom={13} style={{height: '500px'}}>
            <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://carto.com/attributions">CARTO</a>'
            />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
        </Map>
    )
    return map
}

export default BusStopMap;
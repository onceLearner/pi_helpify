import React, { useState, useEffect } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const ZTest = () => {
    const position = [51.505, -0.09]
    return (
        <div className="h-screen w-full p-5" >
            <div className="w-80 h-80 p-12  ">
                Map
            </div>

            <div className=" h-96  border-4 border-blue-600" style={{ height: "1000px" }}>

                <MapContainer

                    style={{ height: "100vh" }}
                    center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                 </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default ZTest;
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFycm91Y2giLCJhIjoiY2tvdDRkdXJ0MDd3YzJybGxncDJnZmdxZiJ9.6heBFSGgTbHqzXUDty1KlA';

const StaticMapbox = ({ localisationX, localisationY }) => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(localisationY);
    const [lat, setLat] = useState(localisationX);
    const [zoom, setZoom] = useState(4.9);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            attributionControl: false,
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        // // Add navigation control (the +/- zoom buttons)
        // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // map.on('move', () => {
        //     setLng(map.getCenter().lng.toFixed(4));
        //     setLat(map.getCenter().lat.toFixed(4));
        //     setZoom(map.getZoom().toFixed(2));
        // });

        // var geolocate = new mapboxgl.GeolocateControl({
        //     positionOptions: {
        //         enableHighAccuracy: true
        //     },
        //     trackUserLocation: true
        // });

        // Add the control to the map.
        // map.addControl(geolocate);
        // var localisation = {
        //     lan: 0,
        //     lg: 0
        // };
        // map.on('load', function () {
        //     geolocate.trigger();
        // });
        // if ("geolocation" in navigator) {

        //     navigator.geolocation.getCurrentPosition(position => {
        //         localisation.lg = position.coords.longitude;
        //         localisation.lan = position.coords.latitude;

        //         console.log(localisation.lan, localisation.lg);
        //         setPosition([localisation.lan, localisation.lg])
        //     });

        //     } else { /* geolocation IS NOT available, handle it */ }

        //     // Clean up on unmount
        //     return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="rounded-xl">
            {/* <div className='sidebarStyle'>
                <div>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div> */}
            <div className='h-48 w-80  rounded-lg m-8 ' ref={mapContainerRef} />
        </div>
    );
};

export default StaticMapbox;

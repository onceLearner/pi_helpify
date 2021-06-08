import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFycm91Y2giLCJhIjoiY2tvdDRkdXJ0MDd3YzJybGxncDJnZmdxZiJ9.6heBFSGgTbHqzXUDty1KlA';

const MapBox = ({ position1, setPosition }) => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        var geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });

        // Add the control to the map.
        map.addControl(geolocate);
        var localisation = {
            lan: 0,
            lg: 0
        };
        map.on('load', function () {
            geolocate.trigger();
        });
        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(position => {
                localisation.lg = position.coords.longitude;
                localisation.lan = position.coords.latitude;

                console.log(localisation.lan, localisation.lg);
                setPosition([localisation.lan, localisation.lg])
            });

        } else { /* geolocation IS NOT available, handle it */ }

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {/* <div className='sidebarStyle'>
                <div>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div> */}
            <div className='h-40' style={{ width: "40vw" }} ref={mapContainerRef} />
        </div>
    );
};

export default MapBox;

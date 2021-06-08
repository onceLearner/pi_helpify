import React from "react"

import { addCircleToMap, addDraggableMarker, setUpClickListener } from "./mapMethods"





export const MapWithCircle = ({ position, perimetre }) => {

    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);

    /**
     * Create the map instance
     * While `useEffect` could also be used here, `useLayoutEffect` will render
     * the map sooner
     */
    React.useLayoutEffect(() => {
        // `mapRef.current` will be `undefined` when this hook first runs; edge case that
        if (!mapRef.current) return;
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "yjaflxNQndwZgmO2rlM--Z6J8KTXunjBrEtH81Fzq14"
        });
        const defaultLayers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: position,
            zoom: 7,
            pixelRatio: window.devicePixelRatio || 1
        });

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));


        // circle           
        ////////////////////////////////////////

        // const coordinates = { lat: 35.6475, lng: -5.7886 };

        // hMap.addObject(new H.Map.Circle(
        //     // The central point of the circle
        //     coordinates,
        //     // The radius of the circle in meters
        //     240,
        //     {
        //         style: {
        //             strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
        //             lineWidth: 2,
        //             fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
        //         }
        //     }
        // ));





        addCircleToMap(hMap, position, perimetre)


        const ui = H.ui.UI.createDefault(hMap, defaultLayers);

        // This will act as a cleanup to run once this hook runs again.
        // This includes when the component un-mounts
        return () => {
            hMap.dispose();
        };
    }, [mapRef, perimetre]); // This will run this hook every time this ref is updated

    return <div className="  relative z-40 rounded-lg w-full" ref={mapRef} style={{ height: "500px" }} />;
};
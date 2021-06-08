const H = window.H;



/**
 * Adds a circle over New Delhi with a radius of 1000 metres onto the map
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
export const addCircleToMap = (map, position, perimetre) => {



    const coordinates = position

    map.addObject(new H.map.Circle(
        // The central point of the circle
        coordinates,
        // The radius of the circle in meters
        2400 * perimetre,
        {
            style: {
                strokeColor: 'rgba(76, 29, 149, 0.6)', // Color of the perimeter
                lineWidth: 2,
                fillColor: 'rgba(99, 102, 241, 0.7)'  // Color of the circle
            }
        }
    ));
}





export const setUpClickListener = (map) => {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', function (evt) {
        var coord = map.screenToGeo(evt.currentPointer.viewportX,
            evt.currentPointer.viewportY);
        console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
            ((coord.lat > 0) ? 'N' : 'S') +
            ' ' + Math.abs(coord.lng.toFixed(4)) +
            ((coord.lng > 0) ? 'E' : 'W'));
    });
}


/**
 * Adds a  draggable marker to the map..
 *
 * @param {H.Map} map                      A HERE Map instance within the
 *                                         application
 * @param {H.mapevents.Behavior} behavior  Behavior implements
 *                                         default interactions for pan/zoom
 */
export const addDraggableMarker = (map, behavior, positionHook) => {

    const [position, setPosition] = positionHook

    var marker = new H.map.Marker({ lat: 35.6475, lng: -5.7886 }, {
        // mark the object as volatile for the smooth dragging
        volatility: true
    });
    // Ensure that the marker can receive drag events
    marker.draggable = true;
    map.addObject(marker);


    // disable the default draggability of the underlying map
    // and calculate the offset between mouse and target's position
    // when starting to drag a marker object:
    map.addEventListener('dragstart', function (ev) {
        var target = ev.target,
            pointer = ev.currentPointer;
        if (target instanceof H.map.Marker) {
            var targetPosition = map.geoToScreen(target.getGeometry());
            target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
            behavior.disable();
        }
    }, false);


    // re-enable the default draggability of the underlying map
    // when dragging has completed
    map.addEventListener('dragend', function (ev) {
        var target = ev.target;
        if (target instanceof H.map.Marker) {
            behavior.enable();
        }
    }, false);

    // Listen to the drag event and move the position of the marker
    // as necessary
    map.addEventListener('drag', function (evt) {

        var coord = map.screenToGeo(evt.currentPointer.viewportX,
            evt.currentPointer.viewportY);
        console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
            ((coord.lat > 0) ? 'N' : 'S') +
            ' ' + Math.abs(coord.lng.toFixed(4)) +
            ((coord.lng > 0) ? 'E' : 'W'));

        setPosition({ lat: coord.lat, lng: coord.lng })

        var target = evt.target,
            pointer = evt.currentPointer;
        if (target instanceof H.map.Marker) {
            target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));
        }
    }, false);
}



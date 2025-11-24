export function Ruteo(
    map,
    longitudUsuario,
    latitudUsuario,
    longitudPOI,
    latitudPOI,
    YOUR_ACCESS_TOKEN,
    txtVisualizarDistancia
){

    if (map.getSource('ruta_source')) {
        map.removeLayer('ruta_layer');
        map.removeSource('ruta_source');
    }

    // Remove existing destination marker if present
    const existingMarker = document.querySelector('[data-marker-id="marcador_destino_ruta"]');
    if (existingMarker) {
        existingMarker.parentElement.remove();
    }

    //Con esto llamo a la api de ruteo de location IQ. Luego invoco las propiedades geometry y distance.
    fetch(`https://us1.locationiq.com/v1/directions/driving/${longitudUsuario},${latitudUsuario};${longitudPOI},${latitudPOI}?key=${YOUR_ACCESS_TOKEN}&geometries=geojson`)
        .then((response) => response.json())
        .then((dataRuteo) => {

            let ruta = dataRuteo.routes[0].geometry;
            let distancia = dataRuteo.routes[0].distance;

            txtVisualizarDistancia.textContent = `Distancia ${distancia} m`

            map.addSource('ruta_source', {
                'type': 'geojson',
                'data': ruta
            });
            map.addLayer({
                'id': 'ruta_layer',
                'type': 'line',
                'source': 'ruta_source',
                'paint': {
                    'line-color': '#FF0000',
                    'line-width': 4,
                }
            })

            // Add red marker at destination (end of route)
            const marcadorDestino = new maplibregl.Marker({ color: '#8d0000ff' })
                .setLngLat([longitudPOI, latitudPOI])
                .addTo(map);

        })
}
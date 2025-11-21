export function CargarCapas(map) {

    map.on('load', () => {
            map.addSource('puntos_interes_source', {
                'type': 'geojson',
                'data': 'https://epok.buenosaires.gob.ar/getGeoLayer/?categoria=estaciones_de_servicio&formato=geojson&srid=4326' //Servicio con los puntos de estaciones de servicio

            });
            map.addLayer({
                'id': 'puntos_interes_layer',
                'type': 'circle',
                'source': 'puntos_interes_source',
                'paint': {
                'circle-radius':5,
                'circle-stroke-width':1,
                'circle-stroke-color': '#ffffff',
                'circle-color': [
                "match",
                ["get","Nombre"],
                'SHELL', "#f0670bff",
                'YPF',"#2151acff",
                'ESSO',"#66079cff",
                "#0000"
                ]
            }
        })
    })}
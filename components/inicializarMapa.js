export function InicializarMapa(longitudUsuario,latitudUsuario){
    return new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=xo994nufIpVA5Pv6bk2V', // style URL
        center: [longitudUsuario, latitudUsuario], // starting position [lng, lat] 
        zoom: 13 // starting zoom
    });
}
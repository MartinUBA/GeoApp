import { Ruteo } from "./Ruteo.js"
import { AgregarFavoritos } from "./AgregarFavoritos.js"

export function AgregarEventosPopUps(map, longitudUsuario,latitudUsuario,YOUR_ACCESS_TOKEN,txtVisualizarDistancia) {
    map.on('click', 'puntos_interes_layer', (evento) => {

        const coordenadas = evento.features[0].geometry.coordinates.slice()
        const atributos = evento.features[0].properties

        let longitudPOI = coordenadas[0]
        let latitudPOI = coordenadas[1]

        const contenidoPopUp = document.createElement('div');
        contenidoPopUp.innerHTML = `<strong>${atributos.Nombre}<strong>`

        const btnIr = document.createElement('button'); //Con esto le agrego al popup el boton "ir" con caracteristicas css
        btnIr.innerHTML = "Ir"
        btnIr.style.padding = "5px";
        btnIr.style.margin = "5px";
        btnIr.style.cursor = "pointer";

        const btnFavoritos = document.createElement('button'); //Con esto le agrego al popup el boton "ir" con caracteristicas css
        btnFavoritos.innerHTML = "Fav"
        btnFavoritos.style.padding = "5px";
        btnFavoritos.style.margin = "5px";
        btnFavoritos.style.cursor = "pointer";


        contenidoPopUp.appendChild(btnIr)
        contenidoPopUp.appendChild(btnFavoritos)

        btnIr.addEventListener('click', () => {
            Ruteo(
                map,
                longitudUsuario,
                latitudUsuario,
                longitudPOI,
                latitudPOI,
                YOUR_ACCESS_TOKEN,
                txtVisualizarDistancia
            );
        })

        btnFavoritos.addEventListener('click', () => {
            AgregarFavoritos(atributos.Nombre);
        })

        new maplibregl.Popup()
            .setLngLat(coordenadas)
            .setDOMContent(contenidoPopUp)
            .addTo(map);
    })
}
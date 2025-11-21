import { InicializarMapa } from "./components/inicializarMapa.js";
import {CargarCapas} from "./components/cargarCapas.js"
import {AgregarEventosPopUps} from "./components/agregarEventosPopups.js"
import {Geocodificacion} from "./components/Geocodificacion.js"
import { CrearLeyenda } from "./components/CrearLeyenda.js";
import { FiltrarCategoria } from "./components/FiltrarCategoria.js";

let YOUR_ACCESS_TOKEN = "pk.dae20e02d5705edf5e4594c719ccb018" 
const ingresarDatos = document.getElementById("ingresarDatos");
const btnBuscar = document.getElementById("btnBuscar");
const txtVisualizarDistancia= document.getElementById("visualizacion-distancia");
const btnLimpiarRuta = document.getElementById("btnLimpiarRuta")

navigator.geolocation.getCurrentPosition((posicion) => {  //Con esto pregunto al inicio si doy permiso para dar ubicación del equipo

    let latitudUsuario = posicion.coords.latitude; //con esto obtengo las coordenadas de la ubicacion del equipo
    let longitudUsuario = posicion.coords.longitude;

    const map = InicializarMapa(longitudUsuario, latitudUsuario) //Con esto llamo a al modulo iniciarlizarMapa.js
    CargarCapas(map)
    AgregarEventosPopUps (map, longitudUsuario,latitudUsuario,YOUR_ACCESS_TOKEN,txtVisualizarDistancia)
    Geocodificacion(map,longitudUsuario, latitudUsuario, btnBuscar,YOUR_ACCESS_TOKEN,ingresarDatos, txtVisualizarDistancia, btnLimpiarRuta)
    CrearLeyenda()
    FiltrarCategoria(map)
   

}) 
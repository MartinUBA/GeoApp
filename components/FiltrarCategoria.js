export function FiltrarCategoria(map) {
    const filtroCategorias = document.getElementById('filtro-categorias')

    filtroCategorias.addEventListener('change', () => {
        const categoriaSeleccionada = filtroCategorias.value
        
        if (categoriaSeleccionada === "all") {
            map.setFilter("puntos_interes_layer", null);
        } else {
            map.setFilter("puntos_interes_layer", ["==",["get","Nombre"],categoriaSeleccionada]) //con esto filtro el numero entero con lo que retorna 'nombre'
        }
    })
}
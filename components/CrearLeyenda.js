export function CrearLeyenda(){
    const menuHamburguesa = document.getElementById('btn-menu-hamburguesa');
    const sidebar = document.getElementById('sidebar');
    const leyenda = document.getElementById('cuerpo-leyenda');

    menuHamburguesa.addEventListener('click',() => {
        sidebar.classList.toggle("activo");
    })

    const categorias = [
        { id: 1, nombre: "SHELL", color: "#f0670bff"},
        { id: 2, nombre: "YPF", color: "#2151acff"},
        { id: 3, nombre: "ESSO", color: "#66079cff"},
    ]

    categorias.forEach(categoria => {
        let item = document.createElement('div');
        let color = document.createElement('span')
        let nombre = document.createElement('span')

        item.className = 'item-leyenda'
        color.className = 'color-leyenda'

        color.style.backgroundColor = categoria.color
        nombre.textContent = categoria.nombre

        item.appendChild(color)
        item.appendChild(nombre)
        leyenda.appendChild(item)
    }

    )




}
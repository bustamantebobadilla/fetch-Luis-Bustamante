/*Catalogo*/
const seccionservicios = document.querySelector("#servicios-catalogo")
function mostrarcatalogo(){
    for (producto of catalogo){
        const {id,nombre,precio,} = producto
        const servicioHTML = `
        <div class= servicio">
            <h3>${nombre}</h3>
            <p>${precio}</p>
            <button class= "btn" onclick="Agendar(${id})> Agendar</button>
        </div>
        `
        seccionservicios.innerHTML+=servicioHTML
    }
}
const carrito = JSON.parse(localStorage.getItem("Carrito")) || []

function Agendar (id){
    const servicio = catalogo.find(servicio => servicio.id ==id)

    if (carrito.find(servicio=>servicio.id==id)){
            const servicio = carrito.find(servicio=>servicio.id==id)
            servicio.cantidad++
    } else {
        carrito.push({
            ...servicio,
            cantidad:1
        })
    }
    mostrarNotificacion(`${servicio.nombre} ha sido agendada`)
    guardarCarrito ()
    }

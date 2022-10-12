/*definir servicios*/

class servicios{
    constructor (id,nombre, precio,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
/* Ingresar servicios en matriz*/
const seleccServ = [];

const serv1 = new servicios (1,"Clases Personalizadas", 250, 4);

const serv2 = new servicios(2, "Regularización", 200, 4)

const serv3 = new servicios (3, "Español para extranjeros", 250, 5)

const serv4 = new servicios (4,"Grupos de conversación", 200, 8)

seleccServ.push(serv1,serv2,serv3,serv4);
/*Construir cards servicios*/
const showservicios = (servicios) => {
    const servcatalogo = document.getElementById("servicios-catalogo")
    servicios.forEach(servicios => {
        const card = document.createElement(`card`);
        card.innerHTML += `<div class="card" style= "width 50px color=yellow;">
            <div class="card-body">
                <h5 class="card title> ${servicios.nombre}></h5>
                <p class= "card-text">Precio: ${servicios.precio}></p>
                <p id="quantity" class="card-text"> ${servicios.cantidad}></p>
                <button class= "btn btn-primary" id="button${servicios.id}>Agendar</button>
            </div>
        </div>`
    servcatalogo.appendChild(card)

    const button = document.getElementById (`button${servicios.id}`);
    button.addEventListener(`click`,()=>{
        seleccServ(`${servicios.id}`);
        alert (`Agregaste ${servicios.nombre}`)
    })
    })
};
showservicios(seleccServ)
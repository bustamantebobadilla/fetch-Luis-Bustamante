/*Definir array de servicios*/

const Arrayserv = [
    {
    "1": "Clases personalizadas",
    costo:250
    },
    {
    "2":"Regularización",
    costo:200
    },
    {
    "3": "Español para extranjeros",
    costo:250
    },
    {
    "4": "Grupos de conversación",
    costo:200
    }
]
/*Pasar Array de servicios a Json para local storage*/
const servArray =JSON.stringify (Arrayserv)
localStorage.setItem ("Servicios", servArray)

/* Eventos en Botones de servicios OBSOLETOS*/
/*
let clases = document.querySelector("#btnClases")
clases.onclick= function() {
    const clase = document.querySelector("#btnClases") 
    clase.textContent = "Tu clase ha sido agendada, el costo es de $200" 
    clase.textContent;  
}
let español = document.querySelector("#btnEspañol")
español.onclick= function(){
    const esp = document.querySelector("#btnEspañol")  
    esp.textContent = "Tu clase  de español ha sido agendada, el costo es de $200"
    esp.textContent; 
}
let regularizacion = document.querySelector("#btnRegularizacion")
regularizacion.onclick= function(){
    const reg = document.querySelector("#btnRegularizacion")
    reg.textContent = "Tu sesión de regularización ha sido agendada con éxito, el costo es de $200 "; 
    reg.textContent;  
}
let conversacion = document.querySelector("#btnConversacion")
conversacion.onclick= function(){
    const conv = document.querySelector("#btnConversacion")
    conv.textContent = "Uno de nuestros especialistas se pondrá en contacto con usted a la brevedad para incluirlo en un gurpo de conversación"; 
    conv.textContent
}*/

/*funcion fetch para traer servicios de data.json*/
async function fetchservicios(){
    const response= await fetch('./data.json')
    return await response.json()
}
/*Definir sección Catalogo de servicios*/
let catalogo = []
fetchservicios().then(servicios=>{
    servicios.forEach(servicio=>{
        catalogo.push(servicio)
    })
    mostrarCatalogo()
})
 const seccionservicios=document.querySelector('#servicioscatalogo')

/*Mostrar el catalogo de servicios */
function mostrarCatalogo(){
    for(servicio of catalogo){
        const {id,nombre,costo} = servicio 
        const servicioHTML = `
            <div class ="servicio">
                <h3>${nombre}</h3>
                <p>${costo}</p>
                <Agendar class="btn" onclick="sumarAlCarrito(${id})">Agendar</button>
            </div>
        `         
        seccionservicios.innerHTML += servicioHTML
    }
}
/*Evento en consola al dar click en algún servicio*/
const servicios = document.querySelector (".div-servicios")

servicios.addEventListener ("click", ()=>{
    console.log("Sesión agendada");
    Swal.fire('Tu sesión ha sido agendada');
})
/*carrito EN PROCESO
const carrito= JSON.parse(localStorage.getItem('carrito'))|| []

Sumar al carrito

function sumarAlCarrito(id ){
    const servicio = catalogo.find(servicio=>servicio.id==id)

    if (carrito.find(servicio=>servicio.id==id)) {
        const servicio = carrito.find(servicio=>servicio.id==id)
        servicio.cantidad++
    } else {
        carrito.push({
            ...servicio,
            cantidad:1
        })
    }
    mostrarNotificacion(`${servicio.nombre} Agendada con éxito`)
    guardarCarrito()
}
*/

/*Eventos en el formulario */

const formulario = document.querySelector ("form")

const nombre = document.querySelector ("#uname")

const telefono = document.querySelector ("#tel")

const correo = document.querySelector ("#mail")

const serv = document.querySelector ("#serv")

formulario.addEventListener("submit", validarformulario)

function validarformulario (e){
    e.preventDefault()
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Uno de nuestros especialistas de aprendizaje se pondra en contacto con usted',
        showConfirmButton: false,
        timer: 2000
      })
}

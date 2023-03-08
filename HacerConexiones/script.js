console.log("page loaded...");

function CambiaNombre(){
    let nombre = document.querySelector(".card-body h1");
    nombre.innerText = "Edson Antilef Torres"

    let imagen = document.getElementsByClassName("avatar-m");
    imagen[0].src = "images/user-circle.png"

    let ubicacion = document.getElementsByTagName("h3");
    ubicacion[0].innerHTML = "<img src='icons/map-marker.png' alt='pin' class='icon-s'> Santiago de chile"

    let Actividad = document.getElementsByName("actividad");
    Actividad[0].innerHTML = "Desarrollador WEB | Ingeniero de Procesos<br>Master of shadows and the Internet!"
}
let Solicitudes = 2;
const eliminar = (usr) => {
    let registro = document.getElementById("usuario" + usr);
    registro.remove();

    let usuario = document.getElementsByClassName("badge");
    Solicitudes--;
    usuario[0].innerText = Solicitudes;
}

let Conexiones = 500;
const aceptar = (usr)=>{
    let lista = document.getElementById("listaConexion");

    let nuevo = document.createElement("li");
    nuevo.classList.add("card-list-item")
    nuevo.classList.add("start")
    
    let nombre = document.querySelector("#usuario" + usr + " > span");
    nuevo.innerHTML = nombre.innerHTML;

    lista.appendChild(nuevo);

    let usuario = document.getElementsByClassName("badge");
    Conexiones++;
    usuario[1].innerText = Conexiones;

    eliminar(usr);
}
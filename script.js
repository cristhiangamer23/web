
// DATOS DE CONFIGURACIÓN
// Después aquí irá tu ID real de Roblox

const OWNER_ID = "123456789";



// LOGIN ROBLOX
// Actualmente es una simulación.
// Después se conecta con Roblox OAuth.

function loginRoblox(){


    // Ocultar login

    document.getElementById("login").style.display="none";


    // Mostrar panel

    document.getElementById("panel").classList.remove("hidden");



    // Datos simulados del jugador

    let jugador = {

        nombre:"CristhianYSuga",

        id:"123456789",

        discord:"BARP_Cristhian",

        rol:"OWNER",

        membresia:"Infinity",

        estado:"Activa",

        casa:"Casa Premium",

        vehiculos:[

            "BMW M4",
            "Toyota Supra",
            "Ford Mustang"

        ]

    };



    cargarPerfil(jugador);



}





function cargarPerfil(jugador){



document.getElementById("username").innerHTML =
jugador.nombre;



document.getElementById("userid").innerHTML =
jugador.id;



document.getElementById("membresia").innerHTML =
jugador.membresia;



document.getElementById("casa").innerHTML =
jugador.casa;



// Vehículos

let lista =
document.getElementById("vehiculos");


lista.innerHTML="";


jugador.vehiculos.forEach(auto=>{


let li=document.createElement("li");


li.innerHTML=auto;


lista.appendChild(li);



});





// PERMISOS OWNER


if(jugador.id === OWNER_ID){


document
.getElementById("ownerPanel")
.classList
.remove("hidden");


document.getElementById("rol").innerHTML=
"👑 OWNER";


}


else{


document.getElementById("ownerPanel")
.classList
.add("hidden");


document.getElementById("rol").innerHTML=
"👤 JUGADOR";


}



}





// CAMBIO DE ESTADO DE MEMBRESÍA


document
.getElementById("estado")
.addEventListener("change",function(){



console.log(
"Nuevo estado:",
this.value
);



});
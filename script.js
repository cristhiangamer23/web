// DATOS DE CONFIGURACIÓN

const OWNER_ID = "123456789";


// LOGIN ROBLOX REAL

function loginRoblox(){

    window.location.href =
    "https://apis.roblox.com/oauth/v1/authorize" +
    "?client_id=7912995031822891356" +
    "&redirect_uri=https://barp-portal.onrender.com/" +
    "&scope=openid%20profile" +
    "&response_type=code";

}



// CARGAR PERFIL DESDE ROBLOX

async function cargarPerfil(){

    const respuesta = await fetch("/usuario");

    const jugador = await respuesta.json();



    document.getElementById("login").style.display="none";

    document
    .getElementById("panel")
    .classList
    .remove("hidden");



    document.getElementById("username").innerHTML =
    jugador.nombre;



    document.getElementById("userid").innerHTML =
    jugador.id;



    document.getElementById("rol").innerHTML =
    "👤 JUGADOR";



    if(jugador.id == OWNER_ID){

        document
        .getElementById("ownerPanel")
        .classList
        .remove("hidden");


        document.getElementById("rol").innerHTML =
        "👑 OWNER";

    }


}


// Ejecutar cuando vuelva de Roblox

if(window.location.pathname == "/perfil"){

    cargarPerfil();

}

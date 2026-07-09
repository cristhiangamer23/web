// DATOS DE CONFIGURACIÓN

const OWNER_ID = "123456789"; // ID de Discord del Owner


// LOGIN DISCORD REAL

function loginDiscord(){

    window.location.href =
    "https://discord.com/oauth2/authorize?client_id=1512855362015854793&response_type=code&redirect_uri=https%3A%2F%2Fbarp-portal.onrender.com%2Fauth%2Fdiscord%2Fcallback&scope=identify" +
    "?client_id=1512855362015854793" +
    "&redirect_uri=https://barp-portal.onrender.com/auth/discord/callback" +
    "&response_type=code" +
    "&scope=identify%20guilds";

}



// CARGAR PERFIL DESDE DISCORD

async function cargarPerfil(){

    const respuesta = await fetch("/usuario");

    const usuario = await respuesta.json();


    document.getElementById("login").style.display="none";


    document
    .getElementById("panel")
    .classList
    .remove("hidden");



    document.getElementById("username").innerHTML =
    usuario.username;



    document.getElementById("userid").innerHTML =
    usuario.id;



    document.getElementById("avatar").src =
    `https://cdn.discordapp.com/avatars/${usuario.id}/${usuario.avatar}.png`;



    document.getElementById("rol").innerHTML =
    "👤 JUGADOR";



    if(usuario.id == OWNER_ID){

        document
        .getElementById("ownerPanel")
        .classList
        .remove("hidden");


        document.getElementById("rol").innerHTML =
        "👑 OWNER";

    }

}



// Ejecutar cuando vuelva de Discord

if(window.location.pathname == "/perfil"){

    cargarPerfil();
window.onload = async ()=>{

    if(window.location.pathname == "/perfil"){

        const respuesta = await fetch("/usuario");


        if(respuesta.ok){

            cargarPerfil();

        }

    }

};
}

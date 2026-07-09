// DATOS DE CONFIGURACIÓN

const OWNER_ID = "123456789";


// LOGIN ROBLOX REAL

function loginRoblox(){

    window.location.href =
    "https://apis.roblox.com/oauth/v1/authorize" +
    "?client_id=6EiVuiOKx0+AmrNeQzYSmgD3ldEVZzOsXne3O3rXhEHNX4AxZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWpaRmFWWjFhVTlMZURBclFXMXlUbVZSZWxsVGJXZEVNMnhrUlZaYWVrOXpXRzVsTTA4emNsaG9SVWhPV0RSQmVDSXNJbTkzYm1WeVNXUWlPaUkwTURrM016YzVPVFF6SWl3aVpYaHdJam94Tnpnek5UYzFOell3TENKcFlYUWlPakUzT0RNMU56SXhOakFzSW01aVppSTZNVGM0TXpVM01qRTJNSDAuREhUR19zcEhaMV9HbGFGdHk2WDlQUVR3MWpuMGIwdFh0OW5XWEpiYjBOY3F1dUdrcWxLMXctTERETkFlMHRZOEVrVVhHN0JRekppVnBuYzh5RnNTZHZLXzVMQ01VTmxQMWg5TjRvXzBsTUJka3k1MV82eUs4U3l5TjBEbFlDYVdKRkk3WXlwSEtIbFBsZTlxa2lBZXRSbElhQ09XV1RsWFVRalpSMjdhTndoUENiWlFFczBnWElGaTluT3ZmOUVub1lXRWtjVjltRFo0aGhuRGdmcjg1X1lJWWVmdHFpVDh3SUw2R3drelNrX0wydW5sTEJzckFiOXhzMTZpeXByVUJDZmljWGI5ZkIybGFSOEp4QjFEc0c3TU55dE9LdzZObXVRMnlvUkpwMG0yN3g1ZHBpMjNKeks2UkQ0TDRwUk9ZWmE0MUxXYnlza0RUdS05MlNWVWJB" +
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

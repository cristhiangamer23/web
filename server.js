const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));


// Página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


// CALLBACK DE DISCORD
app.get("/auth/discord/callback", (req, res) => {

    const code = req.query.code;


    if (!code) {
        return res.send("No se recibió código de Discord");
    }


    console.log("Código recibido de Discord:", code);


    // Después aquí se hará el intercambio
    // del código por el token de Discord


    res.redirect("/perfil");

});


// Perfil
app.get("/perfil", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});

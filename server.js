const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();


app.use(session({
    secret: "barp-secreto",
    resave: false,
    saveUninitialized: true
}));


app.use(express.static(__dirname));



app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});




// LOGIN DISCORD CALLBACK

app.get("/auth/discord/callback", async (req, res) => {


    const code = req.query.code;


    if(!code){
        return res.send("No llegó código de Discord");
    }



    // Por ahora guardamos datos de prueba

    req.session.usuario = {
        id: "1512855362015854793",
        username: "Usuario Discord",
        avatar: null
    };



    res.redirect("/perfil");

});





// PERFIL

app.get("/perfil", (req, res)=>{


    if(!req.session.usuario){

        return res.redirect("/");

    }


    res.sendFile(path.join(__dirname,"index.html"));


});





// DATOS DEL USUARIO

app.get("/usuario",(req,res)=>{


    if(!req.session.usuario){

        return res.status(401).json({
            error:"No iniciado"
        });

    }


    res.json(req.session.usuario);


});





const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{

console.log("Servidor activo en puerto "+PORT);
    npm install express-session

});

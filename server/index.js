// Importar express
const express = require("express");
const routes = require("./routes");
const path = require("path")
const bodyParser = require("body-parser")

require("dotenv").config({path:"variables.env"})

const db = require("./config/database")

db.authenticate()
    .then(()=> console.log("DB conectada"))
// Configuramos express
const app = express();

// Habilitar pug
app.set("view engine", "pug");

// Añadir vistas
app.set("views", path.join(__dirname,"./view"))

// Configurar archivos estaticos
app.use(express.static("public"))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Muestra el año actual y genera la ruta
app.use((req,res,next)=>{
    //Creo nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path
    return next();
})

// Cargar las rutas

app.use("/",routes)

//Puerto y host para la app
const host = process.env.host || "0.0.0.0"
const port = process.env.PORT || 3000
app.listen(port, host ,()=>{
    console.log("El servidor esta funcionando")
});
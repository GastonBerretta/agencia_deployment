const express = require("express");
const router = express.Router();

//Controllers
const viajesController = require("../controlers/viajesController")
const testimonialesController = require("../controlers/testimoniales")
const nosotrosController = require("../controlers/nosotrosController")
const homeController = require("../controlers/homeController")

//Rutas
router.get("/",homeController.consultasHomePage);

router.get("/nosotros",nosotrosController.infoNosotros );

router.get("/viajes",viajesController.mostrarViajes );

router.get("/viajes/:id",viajesController.mostrarViaje );

router.get("/testimoniales", testimonialesController.mostrarTestimoniales);

router.post("/testimoniales",testimonialesController.agregarTestimonial );


module.exports = router;

const Testimonial = require("../models/Testimoniales");
const Testimoniales = require("../models/Testimoniales");
exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll()
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    })
;
};
exports.agregarTestimonial = async (req, res) => {
  //Validacion de campos
  let { nombre, correo, mensaje } = req.body;

  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "Agrega tu Nombre" });
  }
  if (!correo) {
    errores.push({ mensaje: "Agrega tu Mail" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Agrega tu Mensaje" });
  }
  //Revisar errores
  if (errores.length > 0) {
    // Mostrar en la vista los errores
    const testimoniales = await Testimoniales.findAll()
    res.render("testimoniales", { pagina:"Testimoniales",testimoniales,errores, nombre, correo, mensaje });
  } else {
    // Almacenar en la BD
    Testimonial.create({
      nombre,
      correo,
      mensaje,
    }).then((testimonial) => res.redirect("/testimoniales"));
  }
};

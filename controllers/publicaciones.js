const { Publicaciones } = require("../models");

const createPublicacion = async (req, res) => {
  try {

    const {idUser, titulo, contenido, categoria, fecha} = req.body

    const newPublicacion = await Publicaciones.create({
      idUser: idUser,
      titulo: titulo,
      contenido: contenido,
      categoria: categoria,
      fecha: fecha || new Date(),
    });
    res.status(201).json({
      status: "Success",
      message: "Publicación creada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = {
  createPublicacion,
};


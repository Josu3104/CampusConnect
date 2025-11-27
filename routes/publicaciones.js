var router = require("express").Router();

const publicacionesCtrl = require("../controllers/publicaciones.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     Publicacion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         idUser:
 *           type: integer
 *         titulo:
 *           type: string
 *         contenido:
 *           type: string
 *         categoria:
 *           type: string
 *         fecha:
 *           type: string
 *           format: date-time
 *     PublicacionCreate:
 *       type: object
 *       required:
 *         - idUser
 *         - titulo
 *         - contenido
 *         - categoria
 *       properties:
 *         idUser:
 *           type: integer
 *           description: ID del usuario que crea la publicación
 *         titulo:
 *           type: string
 *           description: Título de la publicación
 *         contenido:
 *           type: string
 *           description: Contenido de la publicación
 *         categoria:
 *           type: string
 *           description: Categoría de la publicación
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de la publicación (se asigna automáticamente si no se proporciona)
 */

/**
 * @swagger
 * /api/publicaciones/new:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PublicacionCreate'
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 message:
 *                   type: string
 *                   example: Publicación creada exitosamente
 *                 data:
 *                   $ref: '#/components/schemas/Publicacion'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Error
 *                 message:
 *                   type: string
 */
router.post("/new", publicacionesCtrl.createPublicacion);

module.exports = router;


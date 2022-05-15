import route from "color-convert/route";
import { Router } from "express";
import {
  verUsuarios,
  AltaUsuario,
  EncontrarUsuario,
  EliminarUsuario,
  ContarUsuario,
  ActualizarUsuarios,
} from "../Controllers/controlador";

const router = Router();

router.get("/", function(req, res) {
  res.render("Index.html")
})
router.get("/Catalogo", function(req, res) {
  res.render("Catalogo.html")
})

router.get("/CajaComentario", function(req, res) {
  res.render("Comentarios.html")
})

router.get("/MandarInfo", function(req, res) {
  res.render("MandarIinfo.html")
})
router.get("/Glosario", function(req, res) {
  res.render("Glosario.html")
})

router.get("/Catalogo/Glosario", function(req, res) {
  res.render("Glosario_A.html")
})

router.get("/Servidor", verUsuarios); //GET = Obtener información

router.post("/Servidor", AltaUsuario);

router.get("/Servidor/count", ContarUsuario);

router.get("/Servidor/:Id", EncontrarUsuario);

router.delete("/Servidor/:Id", EliminarUsuario);

router.put("/Servidor/:CorreoE", ActualizarUsuarios);

/*
router.post("/productsq", createNewProduct); //POST = Crear o insertar información

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById); //DELETE = Borrar ingormación

router.put("/products/:id", updateProductById); //Actualizar información
*/
export default router;
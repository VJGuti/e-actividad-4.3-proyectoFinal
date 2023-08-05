const modal1 = document.querySelector("#modal1");
const btnAbrirModal1 = document.querySelector("#btn-abrir-modal1");
const btnCerrarModal1 = document.querySelector("#btn-cerrar-modal1");

const modal2 = document.querySelector("#modal2");
const btnAbrirModal2 = document.querySelector("#btn-abrir-modal2");
const btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2");

const formAgregar = document.querySelector("#form-agregar");
const formActualizar = document.querySelector("#form-actualizar");

/* Abrir y cerrar el modal de formulario */
btnAbrirModal1.addEventListener("click", () => {
  modal1.showModal();
});
btnAbrirModal2.addEventListener("click", () => {
  modal2.showModal();
});

btnCerrarModal1.addEventListener("click", () => {
  modal1.close();
});
btnCerrarModal2.addEventListener("click", () => {
  modal2.close();
});

const $foto = document.querySelector("#foto"),
$fotoPrevisualizacion = document.querySelector("#fotoPrevisualizacion");
$foto.addEventListener("change", () => {
  const archivos = $foto.files;
  if (!archivos || !archivos.length) {
    $fotoPrevisualizacion.src = "";
    return;
  }
  const primerArchivo = archivos[0];
  const objectURL = URL.createObjectURL(primerArchivo);
  $fotoPrevisualizacion.src = objectURL;
});

const $foto2 = document.querySelector("#foto2");

/* Guardar el formulario */
formAgregar.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos;
  const nombre = document.querySelector("#nombre").value;
  const categoria = document.querySelector("#categoria").value;
  const precio = document.querySelector("#precio").value;
  const cantidad = document.querySelector("#cantidad").value;
  const descripcion = document.querySelector("#descripcion").value;
  const clasificacion = document.querySelector("#clasificacion").value;
  const fotoCargada = fotoPrevisualizacion.src
  datos = {nombre, categoria, precio, cantidad, descripcion, clasificacion, fotoCargada};
  console.log(datos);
});

formActualizar.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos;
  const nombre = document.querySelector("#nombre-act").value;
  const categoria = document.querySelector("#categoria-act").value;
  const precio = document.querySelector("#precio-act").value;
  const cantidad = document.querySelector("#cantidad-act").value;
  const descripcion = document.querySelector("#descripcion-act").value;
  const clasificacion = document.querySelector("#clasificacion-act").value;
  const fotoCargada = fotoPrevisualizacionAct.src
  datos = {nombre, categoria, precio, cantidad, descripcion, clasificacion, fotoCargada};
  console.log(datos);
});
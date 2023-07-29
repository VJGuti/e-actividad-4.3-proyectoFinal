const modal = document.querySelector("#modal");
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const formAgregar = document.querySelector("#form-agregar")

/* Abrir y cerrar el modal de formulario */
btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
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
})
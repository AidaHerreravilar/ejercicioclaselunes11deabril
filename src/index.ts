let nodoInput = document.getElementById("txtNombre");

function actualizarSaludo(): void {
  let nombre = nodoInput.value;
  console.log("hola " + nombre);
  let nodoSaludo = document.getElementById("txtSaludo");
  nodoSaludo.innerHTML = "Hola " + nombre;
}

nodoInput.addEventListener("input", actualizarSaludo);

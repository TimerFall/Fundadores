let filaEditando = null;

function mostrarFormulario(editar = false, boton = null) {
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('informacion').style.display = 'none';
  document.getElementById('informaciondos').style.display = 'none';

  document.getElementById('formTitulo').textContent = editar ? 'Editar Componente' : 'Agregar Componente';

  if (editar && boton) {
    filaEditando = boton.parentNode.parentNode;
    let celdas = filaEditando.children;
    document.getElementById('componente').value = celdas[0].textContent;
    document.getElementById('funcion').value = celdas[1].textContent;
    document.getElementById('marca').value = celdas[2].textContent;
    document.getElementById('precio').value = celdas[3].textContent;
  } else {
    filaEditando = null;
    document.getElementById('componente').value = '';
    document.getElementById('funcion').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('precio').value = '';
  }
}

function guardarFila(event) {
  event.preventDefault();

  const componente = document.getElementById('componente').value;
  const funcion = document.getElementById('funcion').value;
  const marca = document.getElementById('marca').value;
  const precio = document.getElementById('precio').value;

  if (filaEditando) {
    // Editar fila existente
    filaEditando.children[0].textContent = componente;
    filaEditando.children[1].textContent = funcion;
    filaEditando.children[2].textContent = marca;
    filaEditando.children[3].textContent = precio;
  } else {
    // Crear nueva fila
    const tabla = document.getElementById('tablaCuerpo');
    const fila = tabla.insertRow();

    fila.innerHTML = `
      <td>${componente}</td>
      <td>${funcion}</td>
      <td>${marca}</td>
      <td>${precio}</td>
      <td>
        <button onclick="mostrarFormulario(true, this)">Editar</button>
        <button onclick="eliminarFila(this)">Borrar</button>
      </td>
    `;
  }

  mostrarInformacion();
}

function eliminarFila(boton) {
  const fila = boton.parentNode.parentNode;
  fila.remove();
}

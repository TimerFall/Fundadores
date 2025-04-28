window.onload = function () {
    if (document.getElementById("btnAgregar")) {
        // Estamos en formulario.html
        prepararFormulario();
        mostrarFilasEnFormulario();
    } else if (document.getElementById("tablaInformacion")) {
        // Estamos en informacion.html
        mostrarFilasEnInformacion();
    }
};

let indexEditando = null;

function obtenerDatos() {
    return JSON.parse(localStorage.getItem("Modelos")) || [];
}

function guardarDatos(modelos) {
    localStorage.setItem("Modelos", JSON.stringify(modelos));
}

function prepararFormulario() {
    document.getElementById("btnAgregar").addEventListener("click", () => {
        const modelo = document.getElementById("txtModelo").value;
        const componente = document.getElementById("txtComponente").value;
        const marca = document.getElementById("txtMarca").value;
        const precio = document.getElementById("txtPrecio").value;
        const funcion = document.getElementById("txtFuncion").value;

        let modelos = obtenerDatos();

        if (indexEditando !== null) {
            // Editando fila existente
            modelos[indexEditando] = { modelo, componente, marca, precio, funcion };
            indexEditando = null;
        } else {
            // Agregando nueva fila
            modelos.push({ modelo, componente, marca, precio, funcion });
        }

        guardarDatos(modelos);
        limpiarFormulario();
        mostrarFilasEnFormulario();
    });
}

function mostrarFilasEnFormulario() {
    const contenedor = document.getElementById("tblModelo");
    const modelos = obtenerDatos();

    contenedor.innerHTML = ""; // Limpiar

    modelos.forEach((fila, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            ${fila.modelo} - ${fila.componente} - ${fila.marca} - ${fila.precio} - ${fila.funcion}
            <button onclick="editarFila(${index})">Editar</button>
            <button onclick="eliminarFila(${index})">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });
}

function mostrarFilasEnInformacion() {
    const modelos = obtenerDatos();
    const tabla = document.getElementById("tablaInformacion");

    modelos.forEach(fila => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${fila.modelo}</td>
            <td>${fila.componente}</td>
            <td>${fila.marca}</td>
            <td>${fila.precio}</td>
            <td>${fila.funcion}</td>
        `;
        tabla.appendChild(tr);
    });
}

function editarFila(index) {
    const modelos = obtenerDatos();
    const fila = modelos[index];

    document.getElementById("txtModelo").value = fila.modelo;
    document.getElementById("txtComponente").value = fila.componente;
    document.getElementById("txtMarca").value = fila.marca;
    document.getElementById("txtPrecio").value = fila.precio;
    document.getElementById("txtFuncion").value = fila.funcion;

    indexEditando = index;
}

function eliminarFila(index) {
    let modelos = obtenerDatos();
    modelos.splice(index, 1);
    guardarDatos(modelos);
    mostrarFilasEnFormulario();
}

function limpiarFormulario() {
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtComponente").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtFuncion").value = "";
}

class Direccion {
    constructor(calle, numero) {
        this.calle = calle;
        this.numero = numero;
    }
}

class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion; // propiedad de tipo objeto Direccion
    }
    saludar() {
        console.log("hola, soy ${this.nombre} y mi edad es ${this.edad}");
        console.log("Vivo en ${this.direccion.calle} ${this.direccion.numero}");
    }
}

const direccion1 = new Direccion(
    prompt("Ingrese la calle"),
    prompt("Ingrese el número")
);

const persona1 = new Persona(
    prompt("Ingrese el nombre del bot"),
    prompt("Ingrese la edad del bot"),
    direccion1
);

persona1.saludar();
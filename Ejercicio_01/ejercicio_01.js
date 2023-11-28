var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, DNI, sexo, peso, altura) {
        if (nombre === void 0) { nombre = ''; }
        if (apellido === void 0) { apellido = ''; }
        if (edad === void 0) { edad = 0; }
        if (sexo === void 0) { sexo = Persona.SEXO_Default; }
        if (peso === void 0) { peso = 0; }
        if (altura === void 0) { altura = 0; }
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    Persona.SEXO_Default = 'H';
    return Persona;
}());
var persona1 = new Persona('Jose', "Marín", 35, '12345678A', 'H', 70, 1.75);
var persona2 = new Persona('Paco', "Marín", 30, '23456789B', 'M', 60, 1.65);
var persona3 = new Persona('Pedro', "Marín", 22, '34567890C');
console.log('Persona 1:', persona1);
console.log('Persona 2:', persona2);
console.log('Persona 3:', persona3);

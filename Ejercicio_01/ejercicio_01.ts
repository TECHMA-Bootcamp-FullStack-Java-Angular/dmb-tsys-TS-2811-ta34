class Persona {

  private static readonly SEXO_Default: string = 'H';

  constructor(
    public nombre: string = '',
    public apellido: string = '',
    public edad: number = 0,
    public DNI: string,
    public sexo: string = Persona.SEXO_Default,
    public peso: number = 0,
    public altura: number = 0
  ) {}
 
}

const persona1 = new Persona('Jose', "Marín" , 35, '12345678A', 'H', 70, 1.75);
const persona2 = new Persona('Paco', "Marín" , 30, '23456789B', 'M', 60, 1.65);
const persona3 = new Persona('Pedro', "Marín" , 22, '34567890C');


console.log('Persona 1:', persona1);
console.log('Persona 2:', persona2);
console.log('Persona 3:', persona3);

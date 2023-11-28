export class Electrodomestico {

  protected static readonly PRECIO_BASE: number = 100;
  protected static readonly COLOR_DEFAULT: string = 'blanco';
  protected static readonly CONSUMO_ENERGETICO_DEFAULT: string = 'F';
  protected static readonly PESO_DEFAULT: number = 5;

  constructor(

    protected precioBase: number = Electrodomestico.PRECIO_BASE,
    protected color: string = Electrodomestico.COLOR_DEFAULT,
    protected consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT,
    protected peso: number = Electrodomestico.PESO_DEFAULT
  ) {
    this.comprobarConsumoEnergetico(consumoEnergetico);
    this.comprobarColor(color);
  }

  getPrecioBase(): number {
    return this.precioBase;
  }

  getColor(): string {
    return this.color;
  }

  getConsumoEnergetico(): string {
    return this.consumoEnergetico;
  }

  getPeso(): number {
    return this.peso;
  }

  comprobarConsumoEnergetico(letra: string): void {
    const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (letrasValidas.includes(letra.toUpperCase())) {
      this.consumoEnergetico = letra.toUpperCase();
    } else {
      this.consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT;
    }
  }

  comprobarColor(color: string): void {
    const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
    const colorLowerCase = color.toLowerCase();
    if (coloresValidos.includes(colorLowerCase)) {
      this.color = colorLowerCase;
    } else {
      this.color = Electrodomestico.COLOR_DEFAULT;
    }
  }

  precioFinal(): number {
    let precio = this.precioBase;

    switch (this.consumoEnergetico) {
      case 'A':
        precio += 100;
        break;
      case 'B':
        precio += 80;
        break;
      case 'C':
        precio += 60;
        break;
      case 'D':
        precio += 50;
        break;
      case 'E':
        precio += 30;
        break;
      case 'F':
        precio += 10;
        break;
    }

    if (this.peso >= 0 && this.peso < 20) {
      precio += 10;
    } else if (this.peso >= 20 && this.peso < 50) {
      precio += 50;
    } else if (this.peso >= 50 && this.peso < 80) {
      precio += 80;
    } else if (this.peso >= 80) {
      precio += 100;
    }

    return precio;
  }
}

class Lavadora extends Electrodomestico {

  private static readonly CARGA_DEFAULT: number = 5;

  constructor(
    precioBase: number = Electrodomestico.PRECIO_BASE,
    color: string = Electrodomestico.COLOR_DEFAULT,
    consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT,
    peso: number = Electrodomestico.PESO_DEFAULT,
    private carga: number = Lavadora.CARGA_DEFAULT
  ) {
    super(precioBase, color, consumoEnergetico, peso);
  }

  getCarga(): number {
    return this.carga;
  }

  precioFinal(): number {
    const precioBaseElectrodomestico = super.precioFinal();

    return this.carga > 30 ? precioBaseElectrodomestico + 50 : precioBaseElectrodomestico;
  }
}

class Television extends Electrodomestico {

  private static readonly RESOLUCION_DEFAULT: number = 20;
  private static readonly CUATRO_K_DEFAULT: boolean = false;

  constructor(

    precioBase: number = Electrodomestico.PRECIO_BASE,
    color: string = Electrodomestico.COLOR_DEFAULT,
    consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT,
    peso: number = Electrodomestico.PESO_DEFAULT,
    private resolucion: number = Television.RESOLUCION_DEFAULT,
    private cuatroK: boolean = Television.CUATRO_K_DEFAULT
  ) {
    super(precioBase, color, consumoEnergetico, peso);
  }

  getResolucion(): number {
    return this.resolucion;
  }

  isCuatroK(): boolean {
    return this.cuatroK;
  }

  precioFinal(): number {
    const precioBaseElectrodomestico = super.precioFinal();

    let precioFinalTelevision = precioBaseElectrodomestico;

    if (this.resolucion > 40) {
      precioFinalTelevision += precioFinalTelevision * 0.3;
    }

    if (this.cuatroK) {
      precioFinalTelevision += 50;
    }

    return precioFinalTelevision;
  }
}


class MainApp {

  static main(): void {

    const electrodomesticos: Electrodomestico[] = new Array(10);

    electrodomesticos[0] = new Lavadora(200, 'rojo', 'A', 25, 40);
    electrodomesticos[1] = new Television(500, 'azul', 'B', 30, 45, true);
    electrodomesticos[2] = new Lavadora(150, 'negro', 'C', 15, 25);
    electrodomesticos[3] = new Television(400, 'gris', 'D', 50, 50, false);
    electrodomesticos[4] = new Electrodomestico(120, 'blanco', 'E', 18);
    electrodomesticos[5] = new Lavadora(180, 'azul', 'F', 55, 35);
    electrodomesticos[6] = new Television(600, 'negro', 'A', 70, 60, true);
    electrodomesticos[7] = new Electrodomestico(90, 'rojo', 'B', 10);
    electrodomesticos[8] = new Lavadora(220, 'gris', 'C', 40, 50);
    electrodomesticos[9] = new Television(350, 'blanco', 'D', 25, 30, false);


    let totalElectrodomesticos = 0;
    let totalLavadoras = 0;
    let totalTelevisiones = 0;

    for (const electrodomestico of electrodomesticos) {
      const precioFinal = electrodomestico.precioFinal();
      console.log(`Precio final: ${precioFinal}`);

      totalElectrodomesticos += precioFinal;

      if (electrodomestico instanceof Lavadora) {
        totalLavadoras += precioFinal;
      } else if (electrodomestico instanceof Television) {
        totalTelevisiones += precioFinal;
      }
    }

    console.log(`\nTotal Electrodomésticos: ${totalElectrodomesticos}`);
    console.log(`Total Lavadoras: ${totalLavadoras}`);
    console.log(`Total Televisiones: ${totalTelevisiones}`);
  }
}

MainApp.main();
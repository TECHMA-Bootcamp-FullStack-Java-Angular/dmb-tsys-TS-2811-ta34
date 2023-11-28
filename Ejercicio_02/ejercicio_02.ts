class Password {
  private longitud: number;
  private password: string ="";

  constructor(longitud: number = 8) {
    this.longitud = longitud;
    this.generatePassword();
  }

  private generatePassword(): void {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nuevaPassword = '';

    for (let i = 0; i < this.longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      nuevaPassword += caracteres.charAt(indiceAleatorio);
    }

    this.password = nuevaPassword;
  }

  get Password(): string {
    return this.password;
  }
}


const password1 = new Password(); 
const password2 = new Password(12); 

console.log('password 1:', password1.Password);
console.log('password 2:', password2.Password);

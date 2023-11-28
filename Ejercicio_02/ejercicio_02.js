var Password = /** @class */ (function () {
    function Password(longitud) {
        if (longitud === void 0) { longitud = 8; }
        this.longitud = longitud;
        this.generatePassword();
    }
    Password.prototype.generatePassword = function () {
        var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var nuevaPassword = '';
        for (var i = 0; i < this.longitud; i++) {
            var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            nuevaPassword += caracteres.charAt(indiceAleatorio);
        }
        this.password = nuevaPassword;
    };
    Object.defineProperty(Password.prototype, "Password", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    return Password;
}());
var password1 = new Password();
var password2 = new Password(12);
console.log('password 1:', password1.Password);
console.log('password 2:', password2.Password);

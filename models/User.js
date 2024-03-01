const { v4: uuidv4 } = require('uuid');

class User {
    reservas = [];
    constructor(name, telf) {
        this.id = uuidv4();
        this.name = name;
        this.telf = telf;
    }
    addReserva(reserva) {
        this.reservas.push(reserva);
    }
}

module.exports = User;
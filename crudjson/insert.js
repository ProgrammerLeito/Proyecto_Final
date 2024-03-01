const rutaJsonUsuarios = "dbjson/usuarios.json";
const fs = require('fs');

const toJson = (user, data) => {
    let obj = data ? JSON.parse(data) : { usuarios: [] };
    let jsonStr = JSON.stringify(user);
    let jsonObj = JSON.parse(jsonStr);
    obj.usuarios.push(jsonObj);

    // Convierte el objeto JSON a un string
    let json = JSON.stringify(obj);

    return json;
}

const insertToUsuarios = (user) => {
    fs.readFile(rutaJsonUsuarios, 'utf8', function (err, data) {
        let obj = data ? JSON.parse(data) : { usuarios: [] };
        if (err) {
            console.log(err);
        } else {
            let usuarioExistente = obj.usuarios.filter(usuario => usuario.telf === user.telf)
            if (usuarioExistente.length == 0) {
                const usuarioJson = toJson(user, data);
                fs.writeFile(rutaJsonUsuarios, usuarioJson, 'utf8', function (err) {
                    if (err) throw err;
                    console.log('El usuario ha sido agregado exitosamente!');
                });
            } else {
                console.log('El usuario ya existe!');
            }
        }
    });
}

module.exports = { insertToUsuarios }
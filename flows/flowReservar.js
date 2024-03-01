const { addKeyword } = require('@bot-whatsapp/bot')

const flowReservar = addKeyword(["2", "reservar"], {sensitive: false})
    .addAnswer("Estos son nuestros destinos: \n\n" +
        "✅ *(1)* Cusco \n" +
        "✅ *(2)* Arequipa\n" +
        "✅ *(3)* Ica\n\n" +
        "Escribe el *numero* del destino para seleccionar"
    ,{capture: true},async (ctx) => {
        
    },[flowCusco, flowArequipa, flowIca])

module.exports = {flowReservar} 
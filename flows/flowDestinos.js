const { addKeyword } = require('@bot-whatsapp/bot')
const { flowCusco } = require('./destinos/flowCusco')
const { flowArequipa } = require('./destinos/flowArequipa')
const { flowIca } = require('./destinos/flowIca')

const flowDestinos = addKeyword(["1", "destinos"], {sensitive: false})
    .addAnswer("Estos son nuestros destinos: \n\n" +
        "✅ *(1)* Cusco \n" +
        "✅ *(2)* Arequipa\n" +
        "✅ *(3)* Ica\n\n" +
        "Escribe el *numero* del destino para ver mas información."
    ,null,null,[flowCusco, flowArequipa, flowIca])

module.exports = {flowDestinos} 
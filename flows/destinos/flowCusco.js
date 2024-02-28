const { addKeyword } = require('@bot-whatsapp/bot')
const {delay} = require('../../metodos/metodos.js')
const flowCusco= addKeyword(["1", "cusco"], {sensitive: false})
    .addAction( async ( ctx, { provider, flowDynamic } ) => {
        await delay(3000)
        await flowDynamic("*Cusco*, la antigua capital del Imperio Inca, " +
        "es una ciudad cautivadora en los Andes peruanos, " + 
        "a una altitud de 3400 metros sobre el nivel del mar. " + 
        "Aunque puede parecer turística, aún conserva su grandeza " +
        "y el espíritu inca. Aquí, la vida local, la gente indígena, " + 
        "las ruinas impresionantes y las vistas panorámicas se entrelazan. " + 
        "Cusco también es la puerta de entrada a Machu Picchu. Si buscas autenticidad," + 
        " historia y belleza natural, Cusco es un destino imperdible en Perú ✈️")
        await provider.sendImage(`${ctx.from}@s.whatsapp.net`, "src/images/cusco_img.jpg")
    })

module.exports = {flowCusco} 
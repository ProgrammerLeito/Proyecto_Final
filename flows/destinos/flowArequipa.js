const { addKeyword } = require('@bot-whatsapp/bot')
const {delay} = require('../../metodos/metodos.js')

const flowArequipa = addKeyword(["2", "arequipa"], {sensitive: false})
    .addAction( async ( ctx, { provider, flowDynamic } ) => {
        await delay(3000)
        await flowDynamic("*Arequipa*, la ciudad blanca de Perú," +
        "se alza majestuosamente a 2,335 metros sobre el nivel del mar." + 
        " Rodeada por los imponentes volcanes *Misti*, *Chachani* y *Pichu Pichu*," + 
        " Arequipa cautiva con su arquitectura de sillar blanco y su rica historia. " + 
        "Aquí encontrarás el *Valle del Colca*, uno de los cañones más profundos del mundo," + 
        " hogar de los majestuosos cóndores andinos. Además, su vibrante vida cultural," + 
        " termas naturales y vistas panorámicas te dejarán sin aliento. ✈️")
        await provider.sendImage(`${ctx.from}@s.whatsapp.net`, "src/images/arequipa_img.jpg")
        await flowDynamic("*(R)* para regresar al menú");            
    })

module.exports = {flowArequipa} 
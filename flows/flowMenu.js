const { addKeyword } = require('@bot-whatsapp/bot')
const { delay, isInMenu } = require('../metodos/metodos.js')
const { flowDestinos } = require('./flowDestinos.js')


const flowMenu = addKeyword(['R', 'regresar'], { sensitive: false })
    .addAnswer("¿En que puedo ayudarte?\n\n *(1)* Destinos 🏞️🏝️\n *(2)* Reservar ✈️🕑\n *(3)* Salir ❌\n\nEscriba la opcion que desea:",
        { capture: true }, async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
            if (ctx.body === "1" || ctx.body === "2" || ctx.body === "3") {
                await delay(1000)
                return gotoFlow(flowDestinos);
            }
            else {
                await delay(1000)
                await flowDynamic("Porfavor indique una opcion correcta 🙏");
                await delay(1000)
                return fallBack();
            }
        })

module.exports = { flowMenu };
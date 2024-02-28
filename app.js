const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const {delay} = require('./metodos/metodos.js')
const {flowDestinos} = require('./flows/flowDestinos.js')

const regex = "^(hola|Hola|wenas|buenas|ole|alo)$";

const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { provider, flowDynamic }) => {
        await flowDynamic(`Hola *${ctx.pushName}* gracias por contactar con "TURISMO VERDE" 🌄`)
        await delay(1000)
        await provider.sendImage(`${ctx.from}@s.whatsapp.net`, 'src/images/turismoVerde_logo.jpg')
    })
    .addAnswer("¿En que puedo ayudarte?\n *(1)* Destinos 🏞️🏝️\n *(2)* Reservar ✈️🕑\n *(3)* Salir ❌\n\nEscriba la opcion que desea:", { capture: true },
        null, [flowDestinos]);

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()

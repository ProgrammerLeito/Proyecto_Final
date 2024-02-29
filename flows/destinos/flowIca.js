const { addKeyword } = require('@bot-whatsapp/bot')
const {delay} = require('../../metodos/metodos.js')

const flowIca = addKeyword(["3", "ica"], {sensitive: false})
    .addAction( async ( ctx, { provider, flowDynamic } ) => {
        await delay(3000)
        await flowDynamic("*Ica*, la tierra del sol eterno," + 
        " te espera con sus playas, valles y el increíble oasis de Huacachina." + 
        " A solo horas de Lima, podrás disfrutar de hoteles de lujo," +
        " practicar múltiples actividades como sandboard en las dunas y" + 
        " sobrevolar las Líneas de Nazca. Además, su variada gastronomía" + 
        " te deleitará con platos como la famosa carapulcra y dulces típicos." + 
        " ¡Un mundo de sabor y aventura te aguarda en Ica! ✈️")
        await provider.sendImage(`${ctx.from}@s.whatsapp.net`, "src/images/ica_img.jpg")
        await flowDynamic("*(R)* para regresar al menú");
    })

module.exports = {flowIca} 
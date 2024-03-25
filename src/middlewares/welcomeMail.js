const {sendMail} = require("../controllers/mail")

const welcome = sendMail({
        to: 'keksramos@gmail.com',
        from: 'aceciliaramos@gmail.com',
        subject: 'Verifica tu dirección de correo electrónico',
        text:'some random text',
        html: '<div>Haz clic en el siguiente botón para verificar tu dirección de correo electrónico y proteger tu privacidad.</div>',

})

module.exports = {welcome}
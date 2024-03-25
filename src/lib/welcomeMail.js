const {sendMail} = require("../controllers/mail")

const welcome = (mail) => {
        return sendMail({
                to: mail,
                from: 'aceciliaramos@gmail.com',
                subject: 'Verifica tu cuenta en Pata de Perro',
                test: 'Has click en el enlace para verificar tu cuenta',
                html: '<div>Haz clic en el siguiente botón para verificar tu dirección de correo electrónico y proteger tu privacidad.</div><br><button>Verificar</button>'
        })
}

module.exports = {welcome}


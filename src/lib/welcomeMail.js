const { sendMail } = require("../controllers/mail");
const { PROD } = require("../../config/constants")

const protocol = PROD ? "https" : "http"
console.log("Will use " + protocol)

const welcome = (mail, emailToken, host) => {
  return sendMail({
    to: mail,
    from: "noreply@pata-de-perro.com",
    subject: "Pata de Perro - Verifica tu cuenta",
    text: `
    ¡Hola!, gracias por registrarte en Pata de Perro!
    Solo queremos verificar tu correo electrónico para que puedas comenzar a utilizar nuestros servicios. Copia y pega el siguiente enlace en tu navegador para verificar tu cuenta.

    ${protocol}://${host}/api/v1/verify?token=${emailToken}

    ¿Recibiste este correo por equivocación? Si es así, ignora este correo. (Aunque también pudieras visitar nuestro sitio, visitanos en ${protocol}://www.pata-de-perro.com)

    ¡Te deseamos un excelente día!

    - Equipo de Pata de Perro
    `,
    html: `
    <p>¡Hola!, gracias por registrarte en Pata de Perro!</p>
    <p> Solo queremos verificar tu correo electrónico para que puedas comenzar a utilizar nuestros servicios. Has click el siguiente enlace en tu navegador para verificar tu cuenta.</p>
    <br>
    <p><a href="${protocol}://${host}/api/v1/verify?token=${emailToken}">Verifica tu cuenta</a>
    <br>
    <p> ¿Recibiste este correo por equivocación? Si es así, ignora este correo. (Aunque también pudieras visitar nuestro sitio, visitanos en ${protocol}://www.pata-de-perro.com)</p>
    <br>
    <p>¡Te deseamos un excelente día!</p>
    <br>
    <p>- Equipo de Pata de Perro</p>
    `,

  });
};

module.exports = { welcome };

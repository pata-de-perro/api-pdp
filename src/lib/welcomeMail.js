const { sendMail } = require("../controllers/mail");

const welcome = (mail, oneTipeUrl, host) => {
  return sendMail({
    to: mail,
    from: "noreply@pata-de-perro.com",
    subject: "Pata de Perro - Verifica tu cuenta",
    text: `
    Gracias por registrarte en Pata de Perro.
    Es importante que verifiques tu cuenta. Copia y pega el siguiente enlace en tu navegador para verificar tu cuenta.
    http://${host}/verify-email?token=${oneTipeUrl}
    `,
    html: `
    <h1>Gracias por registrarte en Pata de Perro</h1>
    <p>Es importante que verifiques tu cuenta. Has click el siguiente enlace en tu navegador para verificar tu cuenta</p>
    <a href="http://${host}/verify-email?token=${oneTipeUrl}">Verifica tu cuenta</a>
    `,
  });
};

module.exports = { welcome };

const { sendMail } = require("../controllers/mail");

const welcome = (mail, otp) => {
  return sendMail({
    to: mail,
    from: "aceciliaramos@gmail.com",
    subject: "Verifica tu cuenta en Pata de Perro",
    test: "Has click en el enlace para verificar tu cuenta",
    html: "<h1>VERIFICA TU CORREO ELECTRÓNICO</h1><br><div></div><br><button>Verificar</button>",
  });
};

module.exports = { welcome };

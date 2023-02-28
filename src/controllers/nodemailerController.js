const productsDB = require("./productsController");
const { Products } = require("../db");
const nodemailer = require("nodemailer");

function validate(body) {
  if (!body.destiny) {
    console.log(
      "NMAILER: Falta enviar dirección de email en la variable destiny del body"
    );
    throw new Error(
      "Falta enviar dirección de email en la variable destiny del body"
    );
    return "Falta enviar dirección de email en la variable destiny del body";
  }
  let varemail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (body.destiny.match(varemail)) {
    console.log("good");
    return "good";
  } else {
    console.log(
      "La variable destiny debe contener una dirección de email valida"
    );
    //throw new Error ("La variable destiny debe contener una dirección de email valida")
    return "La variable destiny debe contener una dirección de email valida";
  }
}

async function nmailer(body) {
  //CHEQUEAR QUE DICE LA VALIDACIÓN PARA DECIDIR SI CONTINUAR O ENVIAR ERROR
  let continuation = validate(body);
  if (continuation === "good") {
  } else {
    throw new Error(continuation);
    return continuation;
  }
  //SETEAR SERVER DE EMAIL
  let transporter = nodemailer.createTransport({
    //SETEO DE LAS VARIABLES DEL SERVIDOR, USUARIO Y CONTRASEÑA DEL MISMO
    host: "smtp-relay.sendinblue.com", //ATENCIÓN: CON GMAIL NO FUNCIONA, POR MEDIDAS DE SEGURIDAD DE GMAIL
    port: 587,
    //secure: true,
    auth: {
      user: "eliaspiolatto77@hotmail.com", //USUARIO O DIRECCIÓN DE EMAIL EN ESE SERVER
      pass: "nbRBYaEsmUTQLANK", //CONTRASEÑA EN ESE SERVER
    },
  });
  //ARMAR CUERPO DE EMAIL Y ENVIAR
  let mapping = "";

  for (let i = 0; i < body.prodsPay.length; i++) {
    mapping =
      mapping + `<tr style='color: white; padding: 5px; text-align: center'>\n`;
    mapping =
      mapping + `<td style='color: white'>${body.prodsPay[i].name}</td>\n`;
    mapping =
      mapping +
      `<td style='color: white; align-items: center'>${body.prodsPay[i].quantity}</td>\n`;
    mapping =
      mapping +
      `<td style='color: white; align-items: center'>${body.prodsPay[i].price}</td>\n`;
    mapping = mapping + `</tr>\n`;
  }

  console.log("mappinggggg", mapping);

  {
    /* <tr>
         <td>${body.prodsPay[0].name}</td>

         <td>${body.prodsPay[0].quantity}</td>

         <td>${body.prodsPay[0].price}</td>
       </tr> */
  }

  let info = await transporter.sendMail({
    from: '"GAMING PALACE" <gaming-palace@gamingpalace.com>', // DETALLES DEL EMAIL A ENVIAR
    to: body.destiny, // DESTINATARIO O LISTA DE DESTINATARIOS
    subject: body.subject, // ASUNTO DEL MAIL
    text: body.text, // TEXTO DEL MAIL
    html: `<table style='border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #262831;'>
		<tr >
			<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><h1 style='font-size: 24px; font-weight: bold; text-align: center; margin-top: 30px; margin-bottom: 20px; color: #95c827'>GAMING PALACE</h1></td>
		</tr>
		<tr>
			<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><p style='font-size: 16px; margin-bottom: 10px; color: #95c827'>Le agradecemos por su compra de hardware en nuestra tienda en línea. Adjunto encontrará un recibo detallado de su compra.</p></td>
			<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><p style='font-size: 16px; margin-bottom: 10px; color: #95c827'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkqP2D7Fhg_A3U0D3tHBhJy0f3dwWbMEUAZ2cya1Wy363HpUT2iWd_rIYMLHbafHhyXU&usqp=CAU' alt='*'/></p></td>
		</tr>
    <div style='border: 5px solid black; background-color: color: #95c827'>
  <table>
    <tbody>
    <tr>
      <th style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><h3 style='color: white'>Detail<h3/></th>
      <th style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><h3 style='color: white'>Quantity<h3/></th>
      <th style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><h3 style='color: white'>Unit Price<h3/></th>
    </tr>
    
      <tr style='color: white; display: flex; justify-content: center; text-align: center; padding: 5px'>
        ${mapping}
      </tr>
      
    
    </tbody>
  </table>
  </div> 
		<tr >
			<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'><p style='font-size: 16px; margin-bottom: 10px; color: #95c827'>Nos comprometemos a proporcionarle productos de alta calidad y un servicio al cliente excepcional. Si tiene alguna pregunta o inquietud sobre su compra, no dude en ponerse en contacto con nuestro equipo de atención al cliente.

      Le agradecemos por su confianza en nosotros y esperamos que disfrute de sus productos de hardware.</p></td>
		</tr>
	</table>`, // HTML DEL MAIL (FORMATO WEB, SOLO HTML)
  });
  //ARMAR RESPUESTA DEL SERVER
  //ARMAR RESPUESTA DEL SERVER
  let response = {
    message:
      "EMAIL HAS BEEN SENT WITH THESE DETAILS. EL EMAIL HA SIDO ENVIADO CON ESTOS DETALLES",
    email_destination: body.destiny,
    email_subject: body.subject,
    email_text: body.text,
    email_html: body.html,
  };
  return response; //ENVIAR RESPUESA DEL SERVER
}

module.exports = {
  nmailer,
};

import twilio from 'twilio'
const accountSid = 'accountSid de Twilio';
const authToken = 'toket de Twilio';

// const client = require('twilio')(accountSid, authToken);

const client=twilio(accountSid, authToken)

// client.messages
//     .create({
//         body: 'Prueba de mensaje...!!!',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+5491154200776'
//     })
//     .then(message => console.log(message.sid))

export const enviarWS=(mensaje, numero)=>{
    return client.messages
    .create({
        body: mensaje,
        from: 'whatsapp:+14155238886',
        // to: 'whatsapp:+5491154200776'
        to: 'whatsapp:+549'+numero
    })
}
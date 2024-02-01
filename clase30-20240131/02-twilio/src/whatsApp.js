import twilio from 'twilio'
const accountSid = 'ACd4b330aed4835e8d8f2af7540afec8da';
const authToken = 'd7a60432abaeaf4d017cf5e51b25f13e';
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
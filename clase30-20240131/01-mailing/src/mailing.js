import nodemailer from 'nodemailer'

const transport=nodemailer.createTransport(
    {
        service: 'gmail',
        port: 587, 
        auth: {
            user: "diegopolverelli@gmail.com",
            pass: "jvncumjsxcxemwcl"
        }
    }
)

export const enviarMail=(to, subject, message, adjuntos)=>{
    return transport.sendMail(
        {
            from: "Diego R. Polverelli diegopolverelli@gmail.com",
            to: to,
            subject: subject,
            // text: "prueba...",
            html: message,
            attachments: adjuntos
        }
    )
}

// enviar()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err.message))
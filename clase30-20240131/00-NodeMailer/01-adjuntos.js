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

const enviar=()=>{
    return transport.sendMail(
        {
            from: "Diego R. Polverelli diegopolverelli@gmail.com",
            to: "diegopolverelli@hotmail.com, diepol@yahoo.com",
            subject: "Prueba email - c/adjuntos",
            // text: "prueba...",
            html: `
<h3 style="color:blue;">Prueba mail c/adjuntos</h3>
<h1 style="color:red;">Prueba mail c/adjuntos</h1>
Prueba...
<p>Prueba... texto...!!!</p>
<p>Nombre: <strong>Diego</strong></p>

`,
            attachments: [
                {
                    path: "./images/diego10.jpg",
                    filename: "diegote.jpg"
                },
                {
                    path: "./images/lio.jpg",
                    filename: "lio.jpg"
                },
                {
                    path: "./images/lio2.jpg",
                    filename: "otraDeLio.jpg"
                },
            ]
        }
    )
}

enviar()
    .then(res=>console.log(res))
    .catch(err=>console.log(err.message))
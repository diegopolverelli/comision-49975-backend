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
            subject: "Prueba email - c/adjuntos incrustados",
            // text: "prueba...",
            html: `
<h3 style="color:blue;">Prueba mail c/adjuntos incrustados</h3>
<h1 style="color:red;">Prueba mail c/adjuntos incrustados</h1>
Prueba...
<p>Prueba... texto...!!!</p>
<p>Nombre: <strong>Diego</strong></p>
<img src="cid:adjunto01" width="350">
<img src="cid:adjunto02" width="350">
<img src="cid:adjunto03" width="350">

`,
            attachments: [
                {
                    path: "./images/diego10.jpg",
                    filename: "diegote.jpg",
                    cid: "adjunto01"
                },
                {
                    path: "./images/lio.jpg",
                    filename: "lio.jpg",
                    cid: "adjunto02"
                },
                {
                    path: "./images/lio2.jpg",
                    filename: "otraDeLio.jpg",
                    cid: "adjunto03"
                },
            ]
        }
    )
}

enviar()
    .then(res=>console.log(res))
    .catch(err=>console.log(err.message))
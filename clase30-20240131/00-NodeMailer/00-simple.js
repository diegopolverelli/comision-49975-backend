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
            subject: "Prueba email - simple",
            // text: "prueba...",
            html: `
<h3 style="color:blue;">Prueba mail simple</h3>
<h1 style="color:red;">Prueba mail simple</h1>
Prueba...
<p>Prueba... texto...!!!</p>
<p>Nombre: <strong>Diego</strong></p>

`
        }
    )
}

enviar()
    .then(res=>console.log(res))
    .catch(err=>console.log(err.message))
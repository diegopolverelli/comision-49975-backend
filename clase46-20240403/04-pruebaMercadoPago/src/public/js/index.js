const cargarMedios = async () => {
    let importe = parseFloat(document.getElementById("importe").value)
    if(importe<1 || isNaN(importe)){
        alert("Ingrese un importe mayor a 0")
        return 
    }

    const mp = new MercadoPago('TEST-clave-public-de-la-app-generada-en-mercado-pago', {
        locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
    });


    let respuesta = await fetch("http://localhost:3000/pagar", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ importe })
    })
    let datos = await respuesta.json()

    let id = datos.id

    const bricksBuilder = mp.bricks();

    bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
            // preferenceId: "<PREFERENCE_ID>",
            preferenceId: id,
        },
        customization: {
            texts: {
                valueProp: 'smart_option',
            },
        },
        callbacks: {
            onError: (error) => console.error(error),
            onReady: () => { }
        }
    });


}


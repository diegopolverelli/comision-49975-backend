// 1) conectar nuestro front a Stripe
const stripe=Stripe("pk_test_clave_publica_stripe")
let elements

const cargarMediosPago=async()=>{
    let importe=10
    importe=parseFloat(document.getElementById("importe").value)
    if(isNaN(importe) || importe<1){
        alert("Indique un importe correcto")
        return 
    }

    importe=importe*100

    // 2) solicitar al back la generacion del paymentIntent
    const respuesta=await fetch("http://localhost:3000/pagos", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({importe})
    })
    const datos=await respuesta.json()
    console.log(datos.client_secret)

    // 5) generar "elements" (medios de pago), y agregarlos con mount al div de nuetro html
    elements=stripe.elements({clientSecret:datos.client_secret})
    const paymentElements=elements.create("payment")
    paymentElements.mount("#mediosPago")
}

const pagar=async()=>{
    // 6) confirmar pago a stripe
    const resultado=await stripe.confirmPayment(
        {
            elements,
            confirmParams:{
                return_url:"http://localhost:3000/index.html"
            }
        }
    )

    // esto que sigue solo ejecuta si algo falla
    console.log(resultado.error.message)
    document.getElementById("resultado").innerHTML=resultado.error.message
}

const mostrarResultado=async(clientSecret)=>{
    // 7) recuperar info de transaccion desde stripe y mostrarlo en el div
    const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret)
    console.log(paymentIntent)
    document.getElementById("resultado").innerHTML=paymentIntent.status

}

const clientSecret=new URLSearchParams(window.location.search).get("payment_intent_client_secret")
if(clientSecret){
    mostrarResultado(clientSecret)
}
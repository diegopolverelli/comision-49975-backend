const comprar=async(idProducto, idCarrito)=>{
    // console.log({idProducto, idCarrito})
    let prueba=document.getElementById("carritoId")
    console.log("Carrito tomado desde imput oculto:",prueba.value)

    let respuesta=await fetch("/api/carritos/"+idCarrito+"/producto/"+idProducto,
    {method:"post"})
    let datos=await respuesta.json()
    console.log(datos)

}
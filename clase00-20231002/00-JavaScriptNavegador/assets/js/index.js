console.log('Hola desde un script')
let respuesta=fetch('https://reqres.in/api/users?page=2')

respuesta.then(res=>{
    return res.json()
})
.then(datos=>{
    console.log(datos)
let html = ''
datos.data.forEach(usuario => {
    html += '<hr><p>' + usuario.first_name +' '+ usuario.last_name+'</p>'
    html += `<img src="${usuario.avatar}">`
})
console.log(html)
let divUsers = document.createElement('div')

divUsers.innerHTML = html
document.body.append(divUsers)


})
.catch(error=>console.log(error.message))
const socket=io()

let tempOK=document.getElementById('tempOK')
let tempBAD=document.getElementById('tempBAD')
tempBAD.innerHTML=''

socket.on("nuevaLecturaTemperatura", temperatura=>{
    if(temperatura>39){
        tempBAD.innerHTML=temperatura
        tempOK.innerHTML=''
    }else{
        tempBAD.innerHTML=''
        tempOK.innerHTML=temperatura
    }
})
const moment=require('moment')

console.log(moment())
console.log(moment().add(15,"days").format("DD-MM-YYYY"))
console.log(moment("2023-11-04 17:00:00").fromNow())
console.log(moment("2023-10-30 20:40:00").fromNow())
console.log(moment().endOf("year").diff(moment(),"days"))
console.log(moment().subtract(15,"days").calendar())

let fecNacimiento=moment("1978-03-23")
if(fecNacimiento.isValid()){
    console.log(`Usted nació hace ${moment().diff(fecNacimiento,"years")} años`)
}else{
    console.log("Error en fecha...!!!")
}
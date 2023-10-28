// replaceAll y RegEx

// Recursos RegEx:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions#usar_expresiones_regulares_en_javascript
// https://regex101.com/
// https://extendsclass.com/regex-tester.html
// https://www.youtube.com/watch?v=wfogZfIS03U 


let texto=`Un hombre se confunde, gradualmente, con la firma
de su destino; un hombre es, a la larga, 
sus circunstancias`






// Object.hasOwn
let persona={
    nombre:'Juan',
    apellido:'Molina',
    edad:39,
    nacionaldad:'Uruguay',
    email:'jmolina@test.com'
}


// Promise.any / Promise.race / Promise.all:
const suma=(a,b,secs)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(a===0) 
            console.log(a)
            res(a+b)
        },secs*1000)
    })
}

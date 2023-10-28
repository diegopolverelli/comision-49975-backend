const fs=require('fs')

class ProductManager{

    constructor(rutaArchivo){
        // this.productos=[]
        this.path=rutaArchivo
    }

    getProducts(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path,"utf-8"))
        }else{
            return []
        }
    }

    addProduct(titulo, codigo, precio){
        let productos=this.getProducts()
        // console.log(productos)
        let id=1
        if(productos.length>0){
            id=productos[productos.length-1].id +1
        }
        // validar que codigo no exista en el array
        let existe=productos.find(p=>p.codigo===codigo)
        if(existe){
            console.log(`El producto con codigo ${codigo} ya existe en DB`)
            return 
        }
        productos.push({
            id, titulo, codigo, precio
        })

        fs.writeFileSync(this.path, JSON.stringify(productos, null, 5))

    }

    delProduct(id){
        let productos=this.getProducts()
        let indice=productos.findIndex(p=>p.id===id)
        if(indice===-1){
            console.log(`El producto con id ${id} no existe en BD`)
            return 
        }

        productos.splice(indice, 1)

        fs.writeFileSync(this.path, JSON.stringify(productos, null, 5))

    }

    updateProduct(id, objeto){
        let productos=this.getProducts()
        let indice=productos.findIndex(p=>p.id===id)
        if(indice===-1){
            console.log(`El producto con id ${id} no existe en BD`)
            return 
        }

        // validar que dentro del objeto no llegue nada raro

        productos[indice]={
            ...productos[indice],
            ...objeto,
            id
        }

        fs.writeFileSync(this.path, JSON.stringify(productos, null, 5))

    }

}

const pm=new ProductManager("./productos.json")
console.log(pm.getProducts())
pm.addProduct("martillo", "001", 100)
pm.addProduct("clavos", "002", 80)
pm.addProduct("pala", "003", 80)
pm.addProduct("tornillos", "004", 80)

console.log(pm.getProducts())
pm.delProduct(3)
console.log(pm.getProducts())
pm.updateProduct(1,{titulo:"Super Martillo", precio:800, id:99999})
console.log(pm.getProducts())


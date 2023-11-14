
class TicketManager{

    static #precioBaseGanancia=0.15

    constructor(){
        this.eventos=[]
    }

    getEventos(){
        return this.eventos
    }

    getEventoById(id){
        let indice=this.eventos.findIndex(evento=>evento.id===id)
        if(indice===-1){
            console.log(`No existe el evento con id ${id}`)
            return
        }

        let indice1=this.eventos.findIndex(evento=>evento.id===id)
        let indice2=this.eventos.find(evento=>evento.id===id)

        console.log('findIndex:',indice1)
        console.log('find:',indice2)

        return this.eventos[indice] 
    }

    agregarAsistente(id, nombre, email){
        let indice=this.eventos.findIndex(evento=>evento.id===id)
        if(indice===-1){
            console.log(`No existe el evento con id ${id}`)
            return
        }

        let existe=this.eventos[indice].participantes.findIndex(participante=>participante.email===email)
        if(existe!==-1){
            console.log(`El usuario con email ${email} ya esta registrado en el evento con id ${id}`)
            return 
        }

        this.eventos[indice].participantes.push({
            nombre, email
        })

    }

    ponerEnGira(id, lugar, fecha){
        let indice=this.eventos.findIndex(evento=>evento.id===id)
        if(indice===-1){
            console.log(`No existe el evento con id ${id}`)
            return
        }

        let idNuevo=this.eventos[this.eventos.length-1].id + 1

        let eventoNuevo={
            ...this.eventos[indice],
            lugar, 
            fecha,
            id: idNuevo,
            participantes:[]
        }

        this.eventos.push(eventoNuevo)


    }

    ponerEnGiraBis(id, lugar, fecha){
        let evento=this.eventos.find(evento=>evento.id===id)
        if(!evento){
            console.log(`No existe el evento con id ${id}`)
            return
        }

        let idNuevo=this.eventos[this.eventos.length-1].id + 1

        let eventoNuevo={
            ...evento,
            lugar, 
            fecha,
            id: idNuevo,
            participantes:[]
        }

        this.eventos.push(eventoNuevo)


    }


    agregarEvento(nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleString()){

        let id=1
        if(this.eventos.length>0){
            id=this.eventos[this.eventos.length-1].id + 1
        }

        let nuevoEvento={
            id,
            nombre, lugar, 
            precio:precio+precio*TicketManager.#precioBaseGanancia,
            capacidad, fecha, 
            participantes:[]
        }

        this.eventos.push(nuevoEvento)
    }


} // fin class

let tm= new TicketManager()
tm.agregarEvento('afterClass01','remoto',10,100, new Date('2023-10-18'))
tm.agregarEvento('afterClass02','remoto',10,100, new Date('2023-11-18'))

console.log(tm.getEventoById(50))
console.log(tm.getEventoById(2))

// let evento2=tm.getEventoById(2)
// evento2.nombre='PRUEBA PRUEBA'
// console.log(tm.getEventoById(2))
tm.agregarAsistente(1, 'Diego', 'diego@test.com')
tm.agregarAsistente(1, 'Juan Manuel', 'jm@test.com')
tm.agregarAsistente(1, 'Laura', 'laura@test.com')
tm.agregarAsistente(1, 'Diego', 'diego@test.com')

tm.ponerEnGira(1, "UNLaM", new Date("2023-12-18"))
tm.ponerEnGira(3, "Haedo", new Date("2023-12-18"))

tm.ponerEnGiraBis(2, "CABA", new Date("2023-12-18"))

console.log(JSON.stringify(tm.getEventos(),null,3))

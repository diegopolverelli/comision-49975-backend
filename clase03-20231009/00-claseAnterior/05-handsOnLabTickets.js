
class TicketManager{

    static #precioBaseGanancia=0.15

    constructor(){
        this.eventos=[]
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha){

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

console.log(tm.getEventos())
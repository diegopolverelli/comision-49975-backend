
export class ConfigSystem{
    static #instancia
    constructor(){
        this.theme="dark",
        this.lang="EN",
        this.font="Helvetica"
    }

    static getConfig(){
        if(this.#instancia){
            return this.#instancia
        }

        this.#instancia=new ConfigSystem()
        return this.#instancia

    }
}
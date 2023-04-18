import { tipo } from "./tipoProducto" 
export class Producto{
    _id:number=0
    _nombre:string=""
    _cantidad:number=0
    _precio:number=0
    _tipo:tipo
    constructor(id:number, nombre:string, cantidad:number, precio:number, tipo:tipo){
        this._id=id
        this._nombre=nombre
        this._cantidad=cantidad
        this._precio=precio
        this._tipo=tipo
    }
}

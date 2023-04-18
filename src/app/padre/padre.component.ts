import { Component } from '@angular/core';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  id = 0
  nombre = ""
  cantidad = 0
  precio = 0
  tipo=0

  opciones: string[] = Object.values(this.tipo).map((v,i,arr)=> v as string);
  existeLista: boolean = false
  listaProductos:Producto[]=[
  ]
  agregarProducto(){
    this.existeLista=true
    let miProducto = new Producto(this.id,this.nombre,this.cantidad,this.precio,this.tipo);
    this.listaProductos.push(miProducto)
  }
}

import { Component, Input } from '@angular/core';
import { Producto } from '../producto/producto';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() productoLista:Producto
  @Input() indice:number
  id = 0
  nombre = ""
  cantidad = 0
  precio = 0
  tipo = 0
  existeLista: boolean = false
  constructor(){}
  ngOnInit(){}
}

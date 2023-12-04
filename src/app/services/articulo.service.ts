import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  listArticulo:Articulo[]=[

  {nombreArticulo:'Acetaminofen',precio:3500,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Advil',precio:8000,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Dolex',precio:7500,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Ibuprofeno',precio:4000,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Apronax',precio:10000,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Buscapina',precio:3500,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Noravel',precio:5000,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Tramadol',precio:14000,cantidad:10,fechaIngreso:new Date ('2023-05-27')},

  {nombreArticulo:'Sevedol',precio:13000,cantidad:10,fechaIngreso:new Date ('2023-05-27')}

];


  constructor() { }

  getArticulo(){
    return this.listArticulo.slice();
  }

  eliminarArticulo(index:number){
    this.listArticulo.splice(index,1);
  }

  agregarArticulo(articulo:Articulo){
    this.listArticulo.unshift(articulo);
  }

  obtenerArticulo(index:number){
    return this.listArticulo[index]
  }

  editarArticulo(articulo:Articulo, idArticulo:number){
    this.listArticulo[idArticulo].nombreArticulo=articulo.nombreArticulo;
    this.listArticulo[idArticulo].precio=articulo.precio;
    this.listArticulo[idArticulo].cantidad=articulo.cantidad;
    this.listArticulo[idArticulo].fechaIngreso=articulo.fechaIngreso;
  }


}

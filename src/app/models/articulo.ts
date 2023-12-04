export class Articulo{
    nombreArticulo:string;
    precio:number;
    fechaIngreso:Date;
    cantidad:number;


    constructor(nombreArticulo:string,precio:number,fechaIngreso:Date,cantidad:number){
        this.nombreArticulo=nombreArticulo;
        this.precio=precio;
        this.fechaIngreso=fechaIngreso;
        this.cantidad=cantidad;
    }



}
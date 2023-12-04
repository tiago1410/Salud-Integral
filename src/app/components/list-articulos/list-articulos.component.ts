import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/articulo';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteService } from 'src/app/services/reporte.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css']
})
export class ListArticulosComponent {
  displayedColumns: string[] = ['nombreArticulo', 'precio', 'cantidad', 'fechaIngreso','acciones'];
  dataSource = new MatTableDataSource<Articulo>();

  lisArticulo:Articulo[]=[];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private articuloService:ArticuloService,public dialog:MatDialog,
    public snackBar: MatSnackBar, private reporteService:ReporteService){

    
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ngOnInit(){
    this.cargarArticulo();
  }

  cargarArticulo(){
    this.lisArticulo=this.articuloService.getArticulo();
    this.dataSource=new MatTableDataSource(this.lisArticulo);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  
  }

  eliminarArticulo(index:number):void{
    const dialogRef=this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{mensaje:'Esta seguro que desea eliminar el articulo?'},
    });

    dialogRef.afterClosed().subscribe(result=>{

      if(result==="aceptar"){
        this.articuloService.eliminarArticulo(index);
        this.cargarArticulo();
        this.snackBar.open('El articulo fue eliminado exitosamente!!','',{
          duration:3000
        })
      }
      
    })

  }

  generarPDF(){
    this.reporteService.generatePDF();
  }


}

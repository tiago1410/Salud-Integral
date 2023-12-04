import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-articulos',
  templateUrl: './edit-articulos.component.html',
  styleUrls: ['./edit-articulos.component.css']
})
export class EditArticulosComponent {

  myForm!:FormGroup
  idArticulo:any;
  accion= "Crear";


  constructor(private fb:FormBuilder,private articuloService:ArticuloService, private route:Router,public snackBar: MatSnackBar, private aRoute:ActivatedRoute){
    this.myForm=this.fb.group({
      nombreArticulo:['',[Validators.required, Validators.maxLength(15)]],
      precio:['',Validators.required],
      cantidad:['',Validators.required],
      fechaIngreso:['',Validators.required],
    });
    this.idArticulo=this.aRoute.snapshot.params['id'];
  }

  ngOnInit():void{
    if(this.idArticulo!=undefined){
      this.accion="Editar";
    }
    this.obtenerArticulo();
  }

  guardarArticulo(){
    const articulo:Articulo={
      nombreArticulo:this.myForm.get('nombreArticulo')?.value,
      precio:this.myForm.get('precio')?.value,
      cantidad:this.myForm.get('cantidad')?.value,
      fechaIngreso:this.myForm.get('fechaIngreso')?.value,
    };

    if(this.idArticulo!==undefined){
      this.editarArticulo(articulo)
    }else{
      this.agregarArticulo(articulo)
    }  



   
    
  }

  agregarArticulo(articulo:Articulo){
  this.articuloService.agregarArticulo(articulo);
  this.snackBar.open('El articulo fue creado exitosamente!!','',{
    duration:3000
  });
  this.route.navigate(['/list-articulos'])
  };

  editarArticulo(articulo:Articulo){
    this.articuloService.editarArticulo(articulo, this.idArticulo)
    this.snackBar.open('El articulo fue actualizado exitosamente!!','',{
      duration:3000
    });
    this.route.navigate(['/list-articulos']);
    
  }

  obtenerArticulo(){
    const articulo:Articulo=this.articuloService.obtenerArticulo(this.idArticulo);
    this.myForm.patchValue({
      nombreArticulo:articulo.nombreArticulo,
      precio:articulo.precio,
      cantidad:articulo.cantidad,
      fechaIngreso:articulo.fechaIngreso,
    })
  }



}

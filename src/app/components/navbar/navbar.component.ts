import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  fPerfil="";
  nombre="";
  correo="";
  datos=false;
  
  constructor(private authGoogleService:AuthGoogleService, private rote:Router){
  
 }

  ngOnInit():void{
    this.showData();
  }

  

  showData(){
    const data= JSON.stringify(this.authGoogleService.getProfile());
    console.log(data);
    const parseData= JSON.parse(data);
    console.log(parseData);
    this.fPerfil=parseData.picture;
    this.nombre=parseData.given_name;
    this.correo=parseData.email
    this.datos=true;
    
  }

  logOut(){
  this.authGoogleService.logout();
  this.rote.navigate(['login']);
  }


}

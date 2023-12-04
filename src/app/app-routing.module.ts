import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'list-articulos',component:ListArticulosComponent},
  {path:'add',component:EditArticulosComponent},
  {path:'list-articulos/add/:id',component:EditArticulosComponent},
  {path:'**',component:LoginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargosComponent } from './components/cargos/cargos.component';
import { CargoFormComponent } from './components/cargos/cargo-form.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { MercanciasComponent } from './components/mercancias/mercancias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },  
  { path: 'cargos', component: CargosComponent },
  { path: 'cargos/form', component: CargoFormComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/form', component: ProductoFormComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'mercancias', component: MercanciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
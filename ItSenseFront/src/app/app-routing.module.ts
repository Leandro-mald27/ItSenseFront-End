import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAddComponent } from './Producto/producto-add/producto-add.component';
import { ProductoDeleteComponent } from './Producto/producto-delete/producto-delete.component';
import { ProductoListComponent } from './Producto/producto-list/producto-list.component';
import { ProductoUpdateComponent } from './Producto/producto-update/producto-update.component';

const routes: Routes = [{
  path: 'productoList', component: ProductoListComponent
},
{
  path:'productoAdd', component:ProductoAddComponent
},
{
path: 'productoDelete', component: ProductoDeleteComponent
}, {
  path:'productoUpdate', component:ProductoUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

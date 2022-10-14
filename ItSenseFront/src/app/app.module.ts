import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './Producto/producto-list/producto-list.component';
import { ProductoAddComponent } from './Producto/producto-add/producto-add.component';
import { ProductoDeleteComponent } from './Producto/producto-delete/producto-delete.component';
import { ProductoUpdateComponent } from './Producto/producto-update/producto-update.component';
import { ProductoService } from './services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoAddComponent,
    ProductoDeleteComponent,
    ProductoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

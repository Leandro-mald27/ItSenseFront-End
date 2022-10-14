import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos!:Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.productoService.get().subscribe(result=>{
      this.productos=result;
    })
  }

}

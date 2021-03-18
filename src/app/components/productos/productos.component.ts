import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from '../../config/app';
import { faTrash, faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent extends CommonListarComponent<Producto, ProductoService> implements OnInit {
  baseEndpoint = BASE_ENDPOINT + '/productos';
  faPlusSquare = faPlusSquare;
  faEdit = faEdit;
  faTrash = faTrash;
  constructor(service: ProductoService) {
    super(service);
    this.titulo = 'Listado de productos';
    this.nombreModel = Producto.name;
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CommonFormComponent } from '../common-form.component';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent extends CommonFormComponent<Producto, ProductoService> implements OnInit {

  faArrowLeft = faArrowLeft;
  faSave = faSave;

  constructor(
    service: ProductoService,
    router: Router,
    route: ActivatedRoute) {
    super(service, router, route);
    this.titulo = 'Crear producto';
    this.model = new Producto();
    this.redirect = '/productos';
    this.nombreModel = Producto.name;
  }
}
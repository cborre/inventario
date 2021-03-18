import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { CommonFormComponent } from '../common-form.component';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent extends CommonFormComponent<Cargo, CargoService> implements OnInit {

  faArrowLeft = faArrowLeft;
  faSave = faSave;

  constructor(
    service: CargoService,
    router: Router,
    route: ActivatedRoute) {
    super(service, router, route);
    this.titulo = 'Crear cargo';
    this.model = new Cargo();
    this.redirect = '/cargos';
    this.nombreModel = Cargo.name;
  }
}
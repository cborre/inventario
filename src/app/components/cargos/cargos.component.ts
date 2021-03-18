import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from '../../config/app';
import { faTrash, faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent extends CommonListarComponent<Cargo, CargoService> implements OnInit {
  baseEndpoint = BASE_ENDPOINT + '/cargos';
  faPlusSquare = faPlusSquare;
  faEdit = faEdit;
  faTrash = faTrash;
  constructor(service: CargoService) {
    super(service);
    this.titulo='Listado de cargos';
    this.nombreModel = Cargo.name;
  }
}
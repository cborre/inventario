import { Component, OnInit } from '@angular/core';
import { Mercancia } from 'src/app/models/mercancia';
import { MercanciaService } from 'src/app/services/mercancia.service';
import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from '../../config/app';
import { faTrash, faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mercancias',
  templateUrl: './mercancias.component.html',
  styleUrls: ['./mercancias.component.css']
})
export class MercanciasComponent extends CommonListarComponent<Mercancia, MercanciaService> implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/mercancias';
  faPlusSquare = faPlusSquare;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(service: MercanciaService) {
    super(service);
    this.titulo='Listado de mercancias';
    this.nombreModel = Mercancia.name;
  }
 }
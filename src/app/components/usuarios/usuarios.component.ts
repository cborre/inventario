import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from '../../config/app';
import { faTrash, faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent extends CommonListarComponent<Usuario, UsuarioService> implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/usuarios';
  faPlusSquare = faPlusSquare;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(service: UsuarioService) {
    super(service);
    this.titulo='Listado de usuarios';
    this.nombreModel = Usuario.name;
  }
}
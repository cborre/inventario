import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CommonService<Usuario>{

  protected baseEndpoint = BASE_ENDPOINT + '/usuarios';

  constructor(http: HttpClient) {
    super(http);
  }
}

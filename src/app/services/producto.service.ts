import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CommonService<Producto> {

  protected baseEndpoint = BASE_ENDPOINT + '/productos';

  constructor(http: HttpClient) {
    super(http);
  }
}
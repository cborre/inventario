import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { Mercancia } from '../models/mercancia';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService extends CommonService<Mercancia> {

  protected baseEndpoint = BASE_ENDPOINT + '/mercancias';

  constructor(http: HttpClient) {
    super(http);
  }
}
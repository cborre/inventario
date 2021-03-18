import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { Cargo } from '../models/cargo';

@Injectable({
    providedIn: 'root'
})
export class CargoService extends CommonService<Cargo> {

    protected baseEndpoint = BASE_ENDPOINT + '/cargos';

    constructor(http: HttpClient) {
        super(http);
    }
}
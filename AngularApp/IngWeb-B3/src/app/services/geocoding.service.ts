import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ubicacion } from '../models/ubicacion';
import { ListenOptions } from 'net';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  getCoordenadasFromCalle(calle: string){
    var ubicacion = this.http.get<Ubicacion>(environment.baseURL+"/api/Ubicacion/"+calle);
    return ubicacion;
  }
}

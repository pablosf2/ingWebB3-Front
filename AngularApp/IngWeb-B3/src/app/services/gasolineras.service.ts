import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Feature } from '../models/gasolinera';

@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolinerasByLocalidad(localidad: string) : Observable<Feature>{
    return this.http.get<Feature>(environment.baseURL+"/api/Gasolineras/municipio?municipio=" + localidad);
  }

  getGasolinerasByProvincia(provincia: string){
    return this.http.get<string>(environment.baseURL+"/api/Gasolineras/provincia?provincia=" + provincia);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Vivienda } from '../models/vivienda';


@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  constructor(private http: HttpClient) { 
    
  }

  getViviendas(){
    return this.http.get<Vivienda[]>(environment.baseURL+"/api/Viviendas");
  }

  createVivivenda(vivienda: Vivienda){
    return this.http.post(environment.baseURL+"/api/Viviendas", vivienda);
  }

  getViviendaById(id: string){
    return this.http.get<Vivienda>(environment.baseURL+"/api/Viviendas/"+id);
  }

  updateVivienda(vivienda: Vivienda){
    let params = new HttpParams();
    return this.http.put<Vivienda>(environment.baseURL+"/api/Viviendas/"+vivienda.id, vivienda);
  }

  deleteVivienda(id: string){
    return this.http.delete(environment.baseURL+"/api/Viviendas/"+id);
  }

  getViviendaByPropietario(id: string){
    return this.http.get<Vivienda[]>(environment.baseURL+"/api/Viviendas/getByPropietario/"+id);
  }

  getViviendaByLocalidad(localidad: string){

    let params = new HttpParams();
    params = params.append('localidad', localidad);
    return this.http.get<Vivienda[]>(environment.baseURL+"/api/Viviendas/getByLocalidad/", {params: params});
  }

}

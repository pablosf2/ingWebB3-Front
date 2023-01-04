import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Valoracion } from '../models/valoracion';


@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  constructor(private http: HttpClient) { 
    
  }

  getValoraciones(){
    return this.http.get<Valoracion[]>(environment.baseURL+"/api/Valoraciones");
  }

  createValoracion(valoracion: Valoracion){
    return this.http.post(environment.baseURL+"/api/Valoraciones", valoracion);
  }

  getValoracionById(id: string){
    return this.http.get<Valoracion>(environment.baseURL+"/api/Valoraciones/"+id);
  }

  updateValoracion(valoracion: Valoracion){
    return this.http.put<Valoracion>(environment.baseURL+"/api/Valoraciones/"+valoracion.id, valoracion);
  }

  deleteValoracion(id: string){
    return this.http.delete(environment.baseURL+"/api/Valoraciones/"+id);
  }

  getValoracionesByVivienda(id: string){
    return this.http.get<Valoracion[]>(environment.baseURL+"/api/Valoraciones/getByVivienda/"+id);
  }

}

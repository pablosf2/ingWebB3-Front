import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mensaje } from '../models/mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { 
    
  }

  getMensajes(){
    return this.http.get<Mensaje[]>(environment.baseURL+"/api/Mensajes");
  }

  createMensaje(Mensaje: Mensaje){
    return this.http.post(environment.baseURL+"/api/Mensajes", Mensaje);
  }

  getMensajeById(id: string){
    return this.http.get<Mensaje>(environment.baseURL+"/api/Mensajes/"+id);
  }

  updateMensaje(Mensaje: Mensaje){
    return this.http.put<Mensaje>(environment.baseURL+"/api/Mensajes/"+Mensaje.id, Mensaje);
  }

  deleteMensaje(id: string){
    return this.http.delete(environment.baseURL+"/api/Mensajes/"+id);
  }

  getMensajesByRemitente(id: string){
    return this.http.get<Mensaje[]>(environment.baseURL+"/api/Mensajes/getByRemitente/"+id);
  }

  getMensajesByDestinatario(id: string){
    return this.http.get<Mensaje[]>(environment.baseURL+"/api/Mensajes/getByDestinatario/"+id);
  }

  getMensajesByRemitenteAndDestinatario(idRemitente?: string, idDestinatario?: string){
    return this.http.get<Mensaje[]>(environment.baseURL+"/api/Mensajes/getByDestinatarioAndRemitente/"+idRemitente+"/"+idDestinatario);
  }
}

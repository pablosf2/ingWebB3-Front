import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  getReservas(){
    return this.http.get<Reserva[]>(environment.baseURL+"/api/Reservas");

  }

  createReserva(reserva: Reserva){
    return this.http.post(environment.baseURL+"/api/Reservas", reserva);
  }

  getReservaById(id: string){
    return this.http.get<Reserva>(environment.baseURL+"/api/Reservas/"+id);
  }

  updateReserva(reserva: Reserva){
    return this.http.put<Reserva>(environment.baseURL+"/api/Reservas/"+reserva.id, reserva);
  }

  deleteReserva(id: string){
    return this.http.delete(environment.baseURL+"/api/Reservas/"+id);
  }

  getReservaByInquilino(id: string){
    return this.http.get<Reserva[]>(environment.baseURL+"/api/Reservas/getByInquilino/"+id);
  }

  getReservaByVivienda(id: string){
    return this.http.get<Reserva[]>(environment.baseURL+"/api/Reservas/getByVivienda/"+id);
  }

  getReservaByFechas(fechaEntrada: string, fechaSalida: string){
    let params = new HttpParams();
    params = params.append('fechaEntrada', fechaEntrada);
    params = params.append('fechaSalida', fechaSalida);
    return this.http.get<Reserva[]>(environment.baseURL+"/api/Reservas/getByFecha/", {params: params});
  }
}

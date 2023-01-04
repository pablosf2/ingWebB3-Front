import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {
  
    constructor(private http: HttpClient) { }

    getUsuarios(){
        return this.http.get<Usuario[]>(environment.baseURL+"/api/Usuarios");
    
      }
    
      createUsuario(usuario: Usuario){
        return this.http.post(environment.baseURL+"/api/Usuarios", usuario);
      }
    
      getUsuarioById(id?: string){
        return this.http.get<Usuario>(environment.baseURL+"/api/Usuarios/"+id);
      }
    
      updateUsuario(id: string, usuario: Usuario){
        let params = new HttpParams();
        params = params.append('id', id);
        return this.http.put<Usuario>(environment.baseURL+"/api/Usuarios/"+id, usuario);
      }
    
      deleteUsuario(id: string){
        return this.http.delete(environment.baseURL+"/api/Usuarios/"+id);
      }

}
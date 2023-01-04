import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { environment } from '../../environments/environment';
import { Vivienda } from '../models/vivienda';
import { AuthGuardService } from '../services/auth-guard.service';
import { ReservaService } from '../services/reserva.service';
import { ViviendaService } from '../services/vivienda.service';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  viviendaList: Vivienda[] = [];
  private clientId = environment.clientId
  isLoggedIn: boolean = false;
  userId: any = localStorage.getItem("id");
  user : Usuario = {id:"-1i",userName:"-1u",email:"-1e", telefono: "-1t"};


  constructor(private viviendaService: ViviendaService, reservaService: ReservaService,
    private router: Router,
    private service: AuthGuardService,
    private servicioUsers : UsuarioService,
    private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.viviendaService.getViviendas()
    .subscribe(data => 
      {
        this.viviendaList = data;
        console.log(this.viviendaList);
      });
      this.isLoggedIn = this.userId != null;
      if (this.isLoggedIn){
          this.servicioUsers.getUsuarioById(this.userId).subscribe(data =>{
          this.user = data
          console.log(data);
        })
      }
  }

  filtrarViviendasByLocalidad(localidad: string){
    this.viviendaService.getViviendaByLocalidad(localidad)
    .subscribe(data => 
      {
        this.viviendaList = data;
        console.log(this.viviendaList);
      });
  }

}

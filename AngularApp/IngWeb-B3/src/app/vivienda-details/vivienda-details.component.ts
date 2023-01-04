import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { MapaComponent } from '../mapa/mapa.component';
import { Usuario } from '../models/usuario';
import { ReservaService } from '../services/reserva.service';
import { UsuarioService } from '../services/usuario.service';
import { ViviendaService } from '../services/vivienda.service';


@Component({
  selector: 'app-vivienda-details',
  templateUrl: './vivienda-details.component.html',
  styleUrls: ['./vivienda-details.component.css']
})
export class ViviendaDetailsComponent implements OnInit {
  mapComponent : MapaComponent;
  vivienda: any = null;
  fechaEntrada: string = "";
  fechaSalida: string = "";
  latitudVivienda: number = 0;
  longitudVivienda: number = 0;
  nPersonas: number = 0;
  puedeReservar: boolean = false;
  puedeValorar: boolean = false;
  esPropietario: boolean = false;
  haReservado : boolean = false;
  user : Usuario ;

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private viviendasService: ViviendaService,
    private reservaService: ReservaService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.viviendasService.getViviendaById(id)
    .subscribe(data => 
      {
        this.vivienda = data;
        // console.log(this.vivienda.propietario);
        // console.log("User:",localStorage.getItem("id"));
        this.esPropietario = this.vivienda.propietario == localStorage.getItem("id");
        this.puedeReservar = !this.esPropietario && localStorage.getItem("id") != null
        this.reservaService.getReservaByVivienda(id).subscribe(data =>{
          let listaReservas = data;
          let incluido = false;
          listaReservas.forEach(element =>{
            // console.log("RESERVA:",element)
            if (element.inquilino == localStorage.getItem("id")){
              // console.log("RESERVA DEL USUARIO:",element)
              incluido = true;
            }
          })
          this.haReservado=incluido;
          this.puedeValorar = !this.esPropietario && localStorage.getItem("id") != null && this.haReservado
        })
        // console.log(this.esPropietario);
        // console.log(this.puedeReservar);
        // console.log(this.puedeValorar);
        this.latitudVivienda = this.vivienda.ubicacion.lat;
        this.longitudVivienda = this.vivienda.ubicacion.lon;
        this.usuarioService.getUsuarioById(this.vivienda.propietario).subscribe(data => {
          this.user = data;
        });
      });

  }

  getReservaByFecha(fechaEntrada: string, fechaSalida: string){
    this.reservaService.getReservaByFechas(fechaEntrada, fechaSalida)
    .subscribe(data => 
      {
        this.vivienda = data;
        console.log(this.vivienda);
      });
  }

  getImageURL(url: string): string{
    return environment.cloudinaryURL + url;
  }

}

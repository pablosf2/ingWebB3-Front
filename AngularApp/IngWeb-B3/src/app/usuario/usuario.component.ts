import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '../models/reserva';
import { Usuario } from '../models/usuario';
import { Vivienda } from '../models/vivienda';
import { ReservaService } from '../services/reserva.service';
import { UsuarioService } from '../services/usuario.service';
import { ViviendaService } from '../services/vivienda.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  currentUser: any = null;
  listaViviendas: Vivienda[] = [];
  listaReservas: Reserva[] = [];

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private viviendasService: ViviendaService,
    private reservaService: ReservaService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    
    this.usuarioService.getUsuarioById(id)
    .subscribe(data => 
      {
        this.currentUser = data;
      });

    this.getListaReservas();
    this.getListaViviendas();
  }

  public getListaViviendas(): void{
    this.viviendasService.getViviendaByPropietario(this.currentUser.id)
    .subscribe(data => 
      {
        this.listaViviendas = data;
      });
  }


  public getListaReservas(): void{
    this.reservaService.getReservaByInquilino(this.currentUser.id)
    .subscribe(data => 
      {
        this.listaReservas = data;
      });
  }
}

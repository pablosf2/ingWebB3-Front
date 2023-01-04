import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '../models/reserva';
import { ReservaView } from '../models/reservaView';
import { ReservaService } from '../services/reserva.service';
import { UsuarioService } from '../services/usuario.service';
import { ViviendaService } from '../services/vivienda.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  legitimo : Boolean = false;
  reservaList: Reserva[] = [];
  vistaList: ReservaView[] =[];
  
  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService,
    private reservasService: ReservaService, private viviandasService: ViviendaService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.legitimo = id == localStorage.getItem("id")
    this.reservasService.getReservaByInquilino(id)
    .subscribe(data => 
      {
        this.reservaList = data;
        this.reservaList.forEach(element => {
          this.viviandasService.getViviendaById(element.idVivienda).subscribe(data =>{
            let item: ReservaView = {
              id: element.id,
              idVivienda: element.idVivienda,
              fechaEntrada: element.fechaEntrada,
              fechaSalida: element.fechaSalida,
              nPersonas: element.nPersonas,
              inquilino: element.inquilino,
              precioTotal: element.precioTotal,
              nombre: data.nombre,
              imagen: data.imagen
            }

            this.vistaList.push(item);
          })
        });
        console.log(this.reservaList)
      });

  }

  searchByDate(fechaEntrada: string, fechaSalida: string){
    this.reservasService.getReservaByFechas(fechaEntrada, fechaSalida)
    .subscribe(data =>
      {
        this.vistaList = [];
        this.reservaList = data;
        this.reservaList.forEach(element => {
          this.viviandasService.getViviendaById(element.idVivienda).subscribe(data =>{
            let item: ReservaView = {
              id: element.id,
              idVivienda: element.idVivienda,
              fechaEntrada: element.fechaEntrada,
              fechaSalida: element.fechaSalida,
              nPersonas: element.nPersonas,
              inquilino: element.inquilino,
              precioTotal: element.precioTotal,
              nombre: data.nombre,
              imagen: data.imagen
            }

            this.vistaList.push(item);
          })
        });
      });
  }

}

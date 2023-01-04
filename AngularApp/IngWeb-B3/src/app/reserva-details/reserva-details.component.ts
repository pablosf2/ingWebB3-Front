import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { ReservaService } from '../services/reserva.service';
import { UsuarioService } from '../services/usuario.service';
import { ViviendaService } from '../services/vivienda.service';

@Component({
  selector: 'app-reserva-details',
  templateUrl: './reserva-details.component.html',
  styleUrls: ['./reserva-details.component.css']
})
export class ReservaDetailsComponent implements OnInit {

  reserva: any = null;
  vivienda: any = null;

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private reservasService: ReservaService,
    private viviendaService: ViviendaService) { }

  ngOnInit(): void {

    const id = String(this.route.snapshot.paramMap.get('id'));

    this.reservasService.getReservaById(id)
    .subscribe(data => 
      {
        this.reserva = data;
        this.viviendaService.getViviendaById(this.reserva.idVivienda)
        .subscribe(data =>
          {
            this.vivienda = data;
          })
      });
  }

  public modificarReserva(): void {
    this.reservasService.updateReserva(this.reserva)
    .subscribe(data => 
      {
        this.reserva = data;
      });
  }

  getImageURL(url: string): string{
    return environment.cloudinaryURL + url;
  }

}

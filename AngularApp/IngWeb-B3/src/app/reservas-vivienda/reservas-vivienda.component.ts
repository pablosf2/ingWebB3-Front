import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reservas-vivienda',
  templateUrl: './reservas-vivienda.component.html',
  styleUrls: ['./reservas-vivienda.component.css']
})
export class ReservasViviendaComponent implements OnInit {

  reservaList: any = null;
  constructor(private reservasService: ReservaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.reservasService.getReservaByVivienda(id)
    .subscribe(data => 
      {
        this.reservaList = data;
      });
  }

}

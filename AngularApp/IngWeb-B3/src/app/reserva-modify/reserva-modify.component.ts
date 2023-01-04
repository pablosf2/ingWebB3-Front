import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../models/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reserva-modify',
  templateUrl: './reserva-modify.component.html',
  styleUrls: ['./reserva-modify.component.css']
})
export class ReservaModifyComponent implements OnInit {

  reserva: any = null;

  constructor(private reservasService: ReservaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.reservasService.getReservaById(id)
    .subscribe(data => 
      {
        this.reserva = data;
      });

  }

  modifyReserva(){
    this.reservasService.updateReserva(this.reserva)
    .subscribe(data => 
      {
        console.log(data);
      });

      this.router.navigate(['/reserva', this.reserva.id])
  }

  deleteReserva(){
    this.reservasService.deleteReserva(this.reserva.id)
    .subscribe(data =>
      {
        
      });
      this.router.navigate(['/reservas', this.reserva.inquilino])
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GasolinerasService } from '../services/gasolineras.service';

@Component({
  selector: 'app-gasolineras',
  templateUrl: './gasolineras.component.html',
  styleUrls: ['../../styles.css']
})
export class GasolinerasComponent implements OnInit {
  feature: any = null;
  latitudGasolinera: number = 0;
  longitudGasolinera: number = 0;
  direccion: any = null;

  constructor(private route: ActivatedRoute,
    private gasolinerasService: GasolinerasService) { }

  ngOnInit(): void {
  }

  getGasolinerasByLocalidad(localidad: string){
    this.gasolinerasService.getGasolinerasByLocalidad(localidad)
    .subscribe(data => 
      {
        this.feature = data;
        this.latitudGasolinera = this.feature.geometry.y;
        this.longitudGasolinera = this.feature.geometry.x;
        this.direccion = this.feature.attributes.dirección;
        console.log(this.latitudGasolinera);
        console.log(this.longitudGasolinera);
      });
  }

  getGasolinerasByProvincia(provincia: string){
    this.gasolinerasService.getGasolinerasByProvincia(provincia)
    .subscribe(data => 
      {
        this.feature = data;
        this.latitudGasolinera = this.feature.geometry.y;
        this.longitudGasolinera = this.feature.geometry.x;
        this.direccion = this.feature.attributes.dirección;
        console.log(this.latitudGasolinera);
        console.log(this.longitudGasolinera);
      });
  }

}

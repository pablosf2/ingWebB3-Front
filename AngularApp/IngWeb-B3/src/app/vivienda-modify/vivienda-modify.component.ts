import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeocodingService } from '../services/geocoding.service';
import { ViviendaService } from '../services/vivienda.service';

@Component({
  selector: 'app-vivienda-modify',
  templateUrl: './vivienda-modify.component.html',
  styleUrls: ['./vivienda-modify.component.css']
})
export class ViviendaModifyComponent implements OnInit {

  vivienda: any = null;
  calle : string ;
  lat : number;
  lon : number;
  lista = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
  'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
  'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
  'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

  constructor(private viviendasService: ViviendaService, private route: ActivatedRoute,
    private router: Router, private geocodingService: GeocodingService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.viviendasService.getViviendaById(id)
    .subscribe(data =>
      {
        this.vivienda = data;
        this.lat = this.vivienda.ubicacion.lat;
        this.lon = this.vivienda.ubicacion.lon;
      });
  }

  modifyVivienda(){
    this.viviendasService.updateVivienda(this.vivienda)
    .subscribe(data =>
      {
        console.log(data);
      });
    this.router.navigate(['/vivienda', this.vivienda.id])
  }

  deleteVivienda(){
    this.viviendasService.deleteVivienda(this.vivienda.id)
    .subscribe(data => 
      {

      });
    this.router.navigate(['/viviendas', this.vivienda.propietario])
  }

  actualizarMapa(){
    console.log("Actualizar mapa", this.vivienda.calle)
    this.geocodingService.getCoordenadasFromCalle(this.vivienda.calle).subscribe(data => 
    {
      this.lat= data.lat;
      this.lon= data.lon;
      this.vivienda.ubicacion = data
    })
    }

}

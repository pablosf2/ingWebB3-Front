import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Vivienda } from '../models/vivienda';
import { UsuarioService } from '../services/usuario.service';
import { ViviendaService } from '../services/vivienda.service';

@Component({
  selector: 'app-viviendas',
  templateUrl: './viviendas.component.html',
  styleUrls: ['../../styles.css']
})
export class ViviendasComponent implements OnInit {
  legitimo : Boolean = false;
  viviendaList: Vivienda[] = [];
  
  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService,
    private viviendasService: ViviendaService) { }

  ngOnInit(): void {

    const id = String(this.route.snapshot.paramMap.get('id'));
    this.legitimo = id == localStorage.getItem("id");

    this.viviendasService.getViviendaByPropietario(id)
    .subscribe(data => 
      {
        this.viviendaList = data;
        console.log(this.viviendaList);
      });
  }

  getImageURL(url: string): string{
    return environment.cloudinaryURL + url;
  }

}

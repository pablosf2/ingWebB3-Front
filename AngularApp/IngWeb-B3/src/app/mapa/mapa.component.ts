import { Component, Input , OnInit, SimpleChanges } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {
  @Input() latitud = 40.4165000;
  @Input() longitud = -3.7025600;
  map: any;
  iniciado: boolean;
  markers : any;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 8
      })
    });
    this.iniciarMarkers();
    this.setCenter(this.latitud, this.longitud);
    this.colocarChincheta(this.latitud,this.longitud);
    this.setZoom(16);
    this.iniciado = true
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.iniciado){
      console.log("ngOnChanges",this.latitud, this.longitud, changes);
      this.setCenter(this.latitud, this.longitud);
      this.colocarChincheta(this.latitud,this.longitud);
      this.setZoom(15);
    }

  }

  setCenter(latitud: number, longitud: number) {
    console.log("setCenter", latitud, longitud)
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([longitud, latitud]));
    //view.setZoom(15);
  }

  setZoom(zoom: number){
    var view = this.map.getView();
    view.setZoom(zoom);
  }

  iniciarMarkers(){
    this.markers = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          scale: 0.05,
          src: 'https://cdn-icons-png.flaticon.com/512/25/25613.png'
        })
      })
    });
    this.map.addLayer(this.markers);
  }

  colocarChincheta(latitud: number, longitud: number) {
    console.log("colocarChincheta", latitud,longitud);
    var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([longitud, latitud])));
    this.markers.getSource().clear();
    this.markers.getSource().addFeature(marker);
  }

  colocarChinchetas(latitud: number, longitud: number) {
    console.log("colocarChinchetas", latitud,longitud)
    var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([longitud, latitud])));
    this.markers.getSource().addFeature(marker);
  }


}

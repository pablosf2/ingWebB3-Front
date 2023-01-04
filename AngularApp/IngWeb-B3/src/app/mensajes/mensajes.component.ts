import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';
import {v4 as uuidv4} from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  conversacion: Mensaje[] = [];
  loggedUser = localStorage.getItem("id")?.toString();
  responseOK: boolean = false;
  mensaje="";
  remitente: any = null;
  destinatario: any = null;

  newMensaje: Mensaje = {
    id: "",
    remitente: this.loggedUser,
    nombreRemitente: "",
    destinatario: "", 
    mensaje: "",
    timestamp: new Date()
  }

  constructor(private route: ActivatedRoute, private mensajesService: MensajeService, private usuariosService: UsuarioService) { }

  ngOnInit(): void {
    
    this.usuariosService.getUsuarioById(this.loggedUser)
    .subscribe(data =>
      {
        this.remitente = data;
      });

      this.usuariosService.getUsuarioById(String(this.route.snapshot.paramMap.get('id')))
      .subscribe(data =>
        {
          this.destinatario = data;
          this.getConversacion(this.destinatario.id.toString(), this.loggedUser);
        }); 
  }

  getConversacion(idRemitente: string, idDestinatario?: string){
    this.mensajesService.getMensajesByRemitenteAndDestinatario(idRemitente, idDestinatario)
    .subscribe(data => 
      {
        this.conversacion = data;
        console.log(this.conversacion);
      });
  }

  sendMensaje(mensaje:string){
    this.newMensaje.id = uuidv4();
    this.newMensaje.timestamp = new Date();
    this.newMensaje.mensaje = mensaje;
    this.newMensaje.nombreRemitente = this.remitente.userName;
    this.newMensaje.destinatario = this.destinatario.id;
    this.mensajesService.createMensaje(this.newMensaje)
    .subscribe(data =>
      {
        console.log(data);
        this.responseOK = data !== null;
        if(this.responseOK) this.getConversacion(this.destinatario.id, this.loggedUser);
      });
  }
}


import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../styles.css']
})
export class HeaderComponent implements OnInit {
  loggedUser:any = localStorage.getItem("id")
  isLoggedIn: boolean = false;
  user : Usuario = {id:"-1i",userName:"-1u",email:"-1e", telefono: "-1t"};

  constructor(private servicioUsers : UsuarioService) { }

  ngOnInit(): void {
    console.log(this.loggedUser)
    this.isLoggedIn = this.loggedUser != null;
    if (this.isLoggedIn){
      this.servicioUsers.getUsuarioById(this.loggedUser).subscribe(data =>{
      this.user = data
      console.log(data);
    })
  }
  }

}

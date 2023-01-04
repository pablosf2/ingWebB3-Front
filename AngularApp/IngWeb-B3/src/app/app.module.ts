import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/ng';
import { AppComponent } from './app.component';
import { TestPabloComponent } from './test-pablo/test-pablo.component';
import { MapaComponent } from './mapa/mapa.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ViviendaDetailsComponent } from './vivienda-details/vivienda-details.component';
import { ReservaDetailsComponent } from './reserva-details/reserva-details.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ViviendasComponent } from './viviendas/viviendas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ViviendaCreateComponent } from './vivienda-create/vivienda-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaModifyComponent } from './reserva-modify/reserva-modify.component';
import { ViviendaModifyComponent } from './vivienda-modify/vivienda-modify.component';
import { ReservasViviendaComponent } from './reservas-vivienda/reservas-vivienda.component';
import { GasolinerasComponent } from './gasolineras/gasolineras.component';
import { LogoutComponent } from './logout/logout.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPabloComponent,
    UsuarioComponent,
    ViviendaDetailsComponent,
    ReservaDetailsComponent,
    LoginComponent,
    ViviendasComponent,
    MapaComponent,
    HeaderComponent,
    FooterComponent,
    ReservasComponent,
    InicioComponent,
    ViviendaCreateComponent,
    ReservaCreateComponent,
    ReservaModifyComponent,
    ViviendaModifyComponent,
    ReservasViviendaComponent,
    GasolinerasComponent,
    ValoracionesComponent,
    LogoutComponent,
    PaypalComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CloudinaryModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    FormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('182737891985-bhlpao31dj89qgu93i4pp3die544nomb.apps.googleusercontent.com') // your client id
        }
      ]
    }
  },
  //AuthGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

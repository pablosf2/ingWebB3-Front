import {Injectable} from '@angular/core';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, ReplaySubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

    private path = environment.baseURL

    constructor(private httpClient: HttpClient) { }
  
    public signOutExternal = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        console.log("token deleted")
    }
  
    LoginWithGoogle(credentials: string): Observable<any> {
      const header = new HttpHeaders().set('Content-type', 'application/json');
      return this.httpClient.post(this.path + "/LoginWithGoogle", JSON.stringify(credentials), { headers: header });
    }
}
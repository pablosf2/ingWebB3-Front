import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private service: AuthGuardService,
    private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.logout();
  }

  public logout(){
    this.service.signOutExternal();
    localStorage.removeItem("id")
    this._ngZone.run(() => {
      this.router.navigate(['/']).then(() => window.location.reload());
    })

  }
}
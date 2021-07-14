import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  readonly ROOT_URL = ''
  responseJson: any
  message: any;

  constructor(private auth: AuthService,private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(connectionForm: NgForm) {
    const data = {
      email: connectionForm.value.email,
      password: connectionForm.value.password
    }
    this.connection(data)
  }

  connection(data: Object) {
    this.responseJson = this.http.post(this.ROOT_URL, data)
    if (this.responseJson.access == "true") {
      this.message = "Connexion en cours ..."
      this.auth.isLoggedIn = true ;
      this.router.navigate(['/inscription-component']) //mettre le bon composant
    } else {
      this.message = "Problème d'authentification !"
    }
  }

}

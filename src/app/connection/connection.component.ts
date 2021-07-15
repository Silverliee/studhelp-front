import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Md5} from 'ts-md5';
import {User} from "../models/User";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000/'
  message: any;
  private user: User = new User();

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.user = new User()
  }

  onSubmit(connectionForm: NgForm) {
    this.user = new User(
      {
        email: connectionForm.value.email,
        password: Md5.hashStr(connectionForm.value.password).toString()
      })
    this.connection(this.user)
  }

  connection(user: User) {
    this.http.post(this.ROOT_URL + 'users/login', user, this.httpOptions).subscribe({
      next: () => {
        this.message = "Connexion en cours ..."
        this.auth.isLoggedIn = true
        this.router.navigate(['/inscription']) //mettre le bon composant
      },
      error: error => {
        console.error('There was an error!', error.message)
        this.message = "Problème d'authentification !"
      }
    })
  }

}

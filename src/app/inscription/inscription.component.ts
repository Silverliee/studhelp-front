import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000/'
  message: any;
  private user: User = new User();

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.user = new User({
      email: "", password: ""
    })
  }

  onSubmit(inscriptionForm: NgForm) {
    if(inscriptionForm.value.password == inscriptionForm.value.passwordConfirm){
      this.user = new User(
        {
          firstname: inscriptionForm.value.firstname,
          lastname: inscriptionForm.value.lastname,
          role: inscriptionForm.value.role,
          email: inscriptionForm.value.email,
          password: Md5.hashStr(inscriptionForm.value.password).toString()
        })
      this.connection(this.user)
    }else{
      this.message = "Les mots de passe ne sont pas identiques."
    }

  }

  connection(user: User) {
    this.http.post(this.ROOT_URL + 'users', user, this.httpOptions).subscribe({
      next: () => {
        this.message = "Inscription effectué!"
        this.auth.isLoggedIn = true
        this.router.navigate(['/connection']) //mettre le bon composant
      },
      error: error => {
        console.error('There was an error!', error.message)
      }
    })
  }
}

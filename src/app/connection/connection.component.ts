import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  readonly ROOT_URL = ''
  responseJson: any

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(connectionForm: NgForm) {
    const data = {
      email: connectionForm.value.email,
      password: connectionForm.value.password
    }
    console.log(data);
    this.connection(data)
  }

  connection(data: Object) {
    this.responseJson = this.http.post(this.ROOT_URL, data)
    if (this.responseJson.access == "true") {
      console.log("Accès validé")
    } else {
      console.log("Accès refusé")
    }

  }

}

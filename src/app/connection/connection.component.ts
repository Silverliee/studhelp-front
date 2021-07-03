import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // $( "#send-connection-button" ).click(function(){
    //   $.post("demo_test_post.asp",
    //     {
    //       name: "Donald Duck",
    //       city: "Duckburg"
    //     },
    //     function(){
    //       console.log("Requete envoyé");
    //     });
    // });

  }

}

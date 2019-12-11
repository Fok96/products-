import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public data = {};
  public center = {
    lat: 38.4318639,
    lng: 24.2517075

  }
  public mapZoom: number = 6;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get("https://simple-api.develobird.gr/contact").subscribe(response => this.data = response);
  }
}



import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  public search="";
  public data= {};
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("https://simple-api.develobird.gr/products").subscribe(response => this.data=response);
  
  }

}

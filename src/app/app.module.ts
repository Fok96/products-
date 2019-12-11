import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from "@agm/core";
import { ProductComponent } from './components/product/product.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { BoxComponent } from './components/box/box.component';
import { BoxesComponent } from './components/boxes/boxes.component';


const routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"products/:productId",
    component:ProductComponent
  },{
    path:"boxes",
    component:BoxesComponent
  }



]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    ProductComponent,
    BoxComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:""
    }),
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    FilterPipeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

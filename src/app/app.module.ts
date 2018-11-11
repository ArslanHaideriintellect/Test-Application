import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { AppRootComponent } from './app-root/app-root.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { HomeSliderComponent } from './main-page/home-slider/home-slider.component';
import { SecondPageComponent } from './second-page/second-page.component';
import {AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FooterService} from './footer/footer.service';
import {DataService} from './data.service';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    HomeSliderComponent,
    SecondPageComponent,
    FooterComponent,
    CardsComponent,
    // AppRootComponent,




  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FooterService , DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

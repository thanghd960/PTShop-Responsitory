import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop/shop-list.component';
import { ShopShowComponent } from './shop/shop-show.component';
import { ShopService } from './shop/shop.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    HomepageComponent,
    ShopShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

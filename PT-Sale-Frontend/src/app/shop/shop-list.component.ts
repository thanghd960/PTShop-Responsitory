import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Shop } from './shop';
import { ShopService } from './shop.service';
import { Router } from "@angular/router";

@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopListComponent implements OnInit {
  shops: Shop[];

  constructor(
    private shopService: ShopService,
    private router: Router
  
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0,5000);
    timer.subscribe(() => this.getShops());
  }
  getShops(){
    this.shopService.getShops()
      .subscribe(shops => this.shops = shops);
    console.log("test get list shop")
  }
  goToShow(shop: Shop): void{
    let shopLink = ['/shops', shop.id];
    this.router.navigate(shopLink)
  }
}

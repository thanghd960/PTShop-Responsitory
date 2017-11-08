import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Shop } from './shop';
import { ShopService } from './shop.service'

@Component({
    selector: 'shop-show',
    templateUrl: 'shop-show.component.html',
    styleUrls: []
})
export class ShopShowComponent implements OnInit {
    id: number;
    routeId: any;
    
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private shopService: ShopService
    ){}
    @Input() shop: Shop
    ngOnInit(){
        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id'];
            }
        )
        let shopRequest = this.route.params
            .flatMap((params: Params) =>
                this.shopService.getShop(+params['id']));
        shopRequest.subscribe(response => this.shop = response.json());
    }
}

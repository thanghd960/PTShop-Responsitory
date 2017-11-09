import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Shop } from './shop';
import { ShopService } from './shop.service'

@Component({
    selector: 'shop-new',
    templateUrl: 'shop-new.component.html',
    styleUrls: []
})
export class ShopNewComponent {
   
    shop = new Shop;
    submitted: boolean = false; //check if the form is submitted
    constructor(
        private shopService: ShopService     
    ){}
    createShop(shop: Shop){
        this.submitted = true;
        this.shopService.createShop(shop)
            .subscribe(data => { return true },
                error => {
                    console.log("Error creating shop");
                    return Observable.throw(error);
                });

    }
    // ngOnInit(){
        
    // }
}

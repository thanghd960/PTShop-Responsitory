import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Shop } from './shop';
@Injectable()
export class ShopService{
    private shopUrl = "http://localhost:3000/portal/shops";
    constructor(private http: Http){}
    
    getShops(): Observable<Shop[]>{
        return this.http.get(this.shopUrl)
        .map((response: Response) => <Shop[]>response.json())
    }

    getShop(id: number){
        return this.http.get(this.shopUrl + "/" + id + '.json')
    }
    createShop(shop: Shop): Observable<Shop>{
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.shopUrl, JSON.stringify(shop),options).map((res: Response) => res.json());
    }
}
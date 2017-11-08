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
        return this.http.get(this.shopUrl).map((response: Response) => <Shop[]>response.json())
    }
}
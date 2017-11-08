import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ShopListComponent} from './shop/shop-list.component';
import {ShopShowComponent} from './shop/shop-show.component';
import {HomepageComponent} from './homepage/homepage.component';
const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',  component: HomepageComponent},
    {path: 'shops',  component: ShopListComponent},
    {path: 'shops/:id', component: ShopShowComponent}

]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule{

}
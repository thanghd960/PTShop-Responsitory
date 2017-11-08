import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ShopListComponent} from './shop/shop-list.component';
import {HomepageComponent} from './homepage/homepage.component';
const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',  component: HomepageComponent},
    {path: 'shops',  component: ShopListComponent}

]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule{

}
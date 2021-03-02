import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ProductListComponent } from './components/product-list/product-list.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DetailsProductComponent } from './components/details-product/details-product.component';

import { TopbarComponent } from './components/topbar/topbar.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import{CargardatosComponent} from './components/CargarDatos/cargardatos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductListComponent,
    DetailsProductComponent,
    CargardatosComponent
  ],
  entryComponents: [],

  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
    ReactiveFormsModule,
       Ng2SearchPipeModule,
       FormsModule,
       HttpClientModule,
      RouterModule.forRoot([   
        { path: '', component: ProductListComponent },
        { path: 'products/:productId', component: DetailsProductComponent }, 
        { path: 'cargardatos', component: CargardatosComponent },
      ]),
    ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy
   }],
   
  bootstrap: [AppComponent],
})
export class AppModule {}

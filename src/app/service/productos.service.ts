import { products } from './../products';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  constructor(
    private http: HttpClient, 
  ) { }
  
  getAllProduct(){
    const path = '"https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"';
    return this.http.get(path);
  }
}

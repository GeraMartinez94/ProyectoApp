import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
})
export class DetailsProductComponent implements OnInit {
  
  product: any;

  title: 'angular-http-client';

  init_point: any;

  preference = {
    items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
        }
    ]
    
  };
  
  constructor( 
    private route: ActivatedRoute,
    private prodserv: ProductosService,
  ) { }



  /*getAllProduct(){
    this.prodserv.getAllProduct().subscribe(todos=>{
      console.log(todos);
    });
  }*/

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
   
  }

}
 

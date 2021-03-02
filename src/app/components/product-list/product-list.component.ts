import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
 
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  products = products;


  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() { 
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    }, 1500);
  }
  
  toggleReorder() {
    const reorderGroup = document.getElementById('reorder');
    reorderGroup.disabled = !reorderGroup.disabled;
  }

  ngOnInit() {

  }

}

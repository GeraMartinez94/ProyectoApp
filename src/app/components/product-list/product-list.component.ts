import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { products } from '../../products';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
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

    }, 1500);
  }
   
   

  ngOnInit() {

  
  }
  
  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
  toggleReorder() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}

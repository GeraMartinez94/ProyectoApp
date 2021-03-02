import { HttpClientModule } from '@angular/common/http';
import { products } from '../../products';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
interface HtmlInputEvent extends Event{
  
  target: HTMLInputElement & EventTarget

}
@Component({
  selector: 'app-cargardatos',
  templateUrl: './cargardatos.component.html',
  styleUrls: ['./cargardatos.component.scss'],
})
export class CargardatosComponent implements OnInit {

  file: File;

  photoSelected: string|ArrayBuffer;
  
  product:any;


  constructor(
    private route: ActivatedRoute,
    private menu: MenuController,
    private http:HttpClientModule ) {}
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    
  }
  onPhotoSelected(event): void{

    if (event.target.files & event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader= new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

    }

  }
  
  CargarFoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
      console.log(title.value)
      console.log(description.value)
      return false;
  }
}

import { HttpClientModule } from '@angular/common/http';
import { products } from '../../products';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Photo, PhotosService } from '../../service/photos.service';
import { ActionSheetController } from '@ionic/angular';



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
    private http:HttpClientModule,
    public photoService: PhotosService,
    public actionSheetController: ActionSheetController ) {}



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
    
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
    async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    await this.photoService.loadSaved();
    
  }

  
  onPhotoSelected(event): void{

    if (event.target.files & event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader= new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

    }

  }
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }
  
  CargarFoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
      console.log(title.value)
      console.log(description.value)
      return false;
  }
}

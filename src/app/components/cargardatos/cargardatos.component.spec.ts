import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargardatosComponent } from './cargardatos.component';

describe('CargardatosComponent', () => {
  let component: CargardatosComponent;
  let fixture: ComponentFixture<CargardatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargardatosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

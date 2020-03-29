import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTravelPage } from './create-travel.page';

describe('CreateTravelPage', () => {
  let component: CreateTravelPage;
  let fixture: ComponentFixture<CreateTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

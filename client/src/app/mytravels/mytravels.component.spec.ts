import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytravelsComponent } from './mytravels.component';

describe('MytravelsComponent', () => {
  let component: MytravelsComponent;
  let fixture: ComponentFixture<MytravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtravelComponent } from './newtravel.component';

describe('NewtravelComponent', () => {
  let component: NewtravelComponent;
  let fixture: ComponentFixture<NewtravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewtravelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



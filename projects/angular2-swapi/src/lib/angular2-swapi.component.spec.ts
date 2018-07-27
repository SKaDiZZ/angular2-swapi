import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2SwapiComponent } from './angular2-swapi.component';

describe('Angular2SwapiComponent', () => {
  let component: Angular2SwapiComponent;
  let fixture: ComponentFixture<Angular2SwapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2SwapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2SwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

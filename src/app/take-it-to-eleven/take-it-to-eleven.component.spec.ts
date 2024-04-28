import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeItToElevenComponent } from './take-it-to-eleven.component';

describe('TakeItToElevenComponent', () => {
  let component: TakeItToElevenComponent;
  let fixture: ComponentFixture<TakeItToElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeItToElevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakeItToElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

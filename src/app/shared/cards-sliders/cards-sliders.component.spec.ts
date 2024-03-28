import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSlidersComponent } from './cards-sliders.component';

describe('CardsSlidersComponent', () => {
  let component: CardsSlidersComponent;
  let fixture: ComponentFixture<CardsSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSlidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

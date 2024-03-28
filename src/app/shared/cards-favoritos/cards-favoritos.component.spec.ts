import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFavoritosComponent } from './cards-favoritos.component';

describe('CardsFavoritosComponent', () => {
  let component: CardsFavoritosComponent;
  let fixture: ComponentFixture<CardsFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDePeliComponent } from './detalles-de-peli.component';

describe('DetallesDePeliComponent', () => {
  let component: DetallesDePeliComponent;
  let fixture: ComponentFixture<DetallesDePeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesDePeliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesDePeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

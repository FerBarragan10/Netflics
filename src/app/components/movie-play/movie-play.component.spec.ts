import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePlayComponent } from './movie-play.component';

describe('MoviePlayComponent', () => {
  let component: MoviePlayComponent;
  let fixture: ComponentFixture<MoviePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviePlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

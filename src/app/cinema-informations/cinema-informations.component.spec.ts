import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaInformationsComponent } from './cinema-informations.component';

describe('CinemaInformationsComponent', () => {
  let component: CinemaInformationsComponent;
  let fixture: ComponentFixture<CinemaInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

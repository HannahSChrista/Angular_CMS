import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOCTORComponent } from './doctor.component';

describe('DOCTORComponent', () => {
  let component: DOCTORComponent;
  let fixture: ComponentFixture<DOCTORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOCTORComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOCTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

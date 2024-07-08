import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDiagnosismedicineListComponent } from './doctor-diagnosismedicine-list.component';

describe('DoctorDiagnosismedicineListComponent', () => {
  let component: DoctorDiagnosismedicineListComponent;
  let fixture: ComponentFixture<DoctorDiagnosismedicineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDiagnosismedicineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDiagnosismedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDiagnosistestListComponent } from './doctor-diagnosistest-list.component';

describe('DoctorDiagnosistestListComponent', () => {
  let component: DoctorDiagnosistestListComponent;
  let fixture: ComponentFixture<DoctorDiagnosistestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDiagnosistestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDiagnosistestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

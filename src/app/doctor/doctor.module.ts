import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DOCTORRoutingModule } from './doctor-routing.module';
import { DOCTORComponent } from './doctor.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';

import { FormsModule } from '@angular/forms';

import { DoctorDiagnosistestListComponent } from './doctor-diagnosistest-list/doctor-diagnosistest-list.component';
import { DoctorDiagnosismedicineListComponent } from './doctor-diagnosismedicine-list/doctor-diagnosismedicine-list.component';



@NgModule({
  declarations: [
    DOCTORComponent,
    DoctorAddComponent,
    DoctorListComponent,
    DoctorAppointmentComponent,
  
  

    DoctorDiagnosistestListComponent,
           DoctorDiagnosismedicineListComponent
  ],
  imports: [
    CommonModule,
    DOCTORRoutingModule,
    FormsModule
  ]
})
export class DOCTORModule { }

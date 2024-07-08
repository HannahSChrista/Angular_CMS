import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { DoctorDiagnosismedicineListComponent } from './doctor-diagnosismedicine-list/doctor-diagnosismedicine-list.component';
import { DoctorDiagnosistestListComponent } from './doctor-diagnosistest-list/doctor-diagnosistest-list.component';

const routes: Routes = [
  {
    path:'list',component:DoctorListComponent},
    {path:'add/:id',component:DoctorAddComponent},
    // {path:'edit/:id',component:DoctorEditComponent},
    {path:'appointment',component:DoctorAppointmentComponent},
    {path:'medicine',component:DoctorDiagnosismedicineListComponent},
    {path:'test',component:DoctorDiagnosistestListComponent}

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DOCTORRoutingModule { }

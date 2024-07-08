import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit {

  constructor(public doctorservice:DoctorService, public router:Router) { }

  ngOnInit(): void {
    this.doctorservice.bindListappointment();

  }
  getRecord(emp:Bookappointment){
  console.log(emp);
  this.populateData(emp)
  this.router.navigate(['doctor/add/',emp.id]);

  }
  populateData(emp: Bookappointment) {
    this.doctorservice.formEmployeeData =
    Object.assign({},emp);
    this.doctorservice.formEmployeeData =
    Object.assign({},emp);
  }
 
  
}

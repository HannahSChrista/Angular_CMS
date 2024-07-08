import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctor-diagnosistest-list',
  templateUrl: './doctor-diagnosistest-list.component.html',
  styleUrls: ['./doctor-diagnosistest-list.component.scss']
})
export class DoctorDiagnosistestListComponent implements OnInit {

  constructor(public testservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
    
  }


  addTest(form: NgForm){
    console.log("adding...")
    //call the service object
    this.testservice.insertTest(form.value).subscribe
    (
      (result => {
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['doctor/list'])
      })
    )
    
  }
  resetForm(form:NgForm){
    if (form != null){
      form.resetForm();
    }
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.addTest(form);
    }

}

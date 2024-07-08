import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { NgForm } from '@angular/forms';
import { Bookappointment } from 'src/app/shared/models/bookappointment';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {
  formEmployeeData2 :  Bookappointment= new Bookappointment();

  constructor(public doctorService:DoctorService,
    private router : Router) { }

  ngOnInit(): void {
    this.formEmployeeData2 = this.doctorService.getFormEmployeeData();
    console.log(this.formEmployeeData2); // Debugging statement to check if data is populated
  }
  

  // }
  // getRecordformedicine(emp: Bookappointment) {
    
  //   console.log("get Record Formed...");
  //   this.populateData(emp);
  //   console.log(emp);
  //   //this.populateData(emp);
  //   // Optionally, navigate to another route if needed
  //   this.router.navigate(['doctor/medicine/', emp.id]); // Example navigation
  // }

  // // Method to populate form data
 
  // populateData(emp: Bookappointment) {
  //   console.log("im here in populateData");
  //   //this.doctorService.setFormEmployeeData(emp);
  //   console.log("added");
  // }

  addDiagnosis(form: NgForm){
    this.doctorService.setFormEmployeeData(this.doctorService.formEmployeeData);
    console.log("adding...")
    const formData = form.value;
    

      // Create a new object excluding the name field
    const diagnosisData = {
        medical_history: formData.medical_history,
        symptoms: formData.symptoms,
        diagnosis: formData.diagnosis,
        doctor_note: formData.doctor_note,
        next_visit: formData.next_visit,
        is_active: true,
        patient_id: this.formEmployeeData2.patient.id // Ensure this field is correctly named and exists in formData
    };
    this.doctorService.insertDiagnosis(diagnosisData).subscribe(
      result => {
        console.log(result); // Debugging statement to check the response
        this.resetForm(form);
        this.router.navigate(['doctor/medicine']);
      }
    );
  }
  resetForm(form:NgForm){
    if (form != null){
      form.resetForm();
    }
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.addDiagnosis(form);
    }



 

}

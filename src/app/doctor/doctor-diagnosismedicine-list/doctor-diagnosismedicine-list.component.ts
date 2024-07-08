import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment';
import { Doctor } from 'src/app/shared/models/doctor';
import { Diagnosis } from 'src/app/shared/models/diagnosis';
import { DiagnosisMedicine } from 'src/app/shared/models/diagnosis-medicine';

@Component({
  selector: 'app-doctor-diagnosismedicine-list',
  templateUrl: './doctor-diagnosismedicine-list.component.html',
  styleUrls: ['./doctor-diagnosismedicine-list.component.scss']
})
export class DoctorDiagnosismedicineListComponent implements OnInit {

  diagnosisMedicineData: DiagnosisMedicine = new DiagnosisMedicine();

  constructor(public doctorService:DoctorService,private router:Router ) { }

  formMedicinelistData: DiagnosisMedicine = new DiagnosisMedicine();
  formEmployeeData2: Bookappointment = new Bookappointment();
  ngOnInit(): void {
    // this.formMedicinelistData = this.doctorService.getFormMedicinelistData();
    this.formEmployeeData2 = this.doctorService.getFormEmployeeData();
    console.log(this.formMedicinelistData); // Debugging statement
    console.log(this.formEmployeeData2); // Debugging statement
    this.formEmployeeData2 = this.doctorService.getFormEmployeeData();
    console.log('Form Employee Data:', this.formEmployeeData2); // Log to check received data





    
  }

 

  // populateData(emp: Bookappointment) {
  //   // Assign the fetched data to the form data object
  //   this.doctorservice.formEmployeeData = Object.assign({}, emp);
  // }
  


  addMedicine(form: NgForm) {
    console.log("Adding Medicine...");
    const formData = form.value;

    this.diagnosisMedicineData.patientid = this.doctorService.formEmployeeData.patient.id; // Adjust the field name as necessary
    // this.diagnosisMedicineData.patientdetails = this.doctorService.formEmployeeData.patientdetails; // Adjust the field name as necessary
    this.diagnosisMedicineData.medicineid = formData.medicine_id; // Ensure this field exists in formData
    this.diagnosisMedicineData.medicinedetails = formData.medicinedetails; // Ensure this field exists in formData
    this.diagnosisMedicineData.dosage = formData.dosage;
    this.diagnosisMedicineData.no_days = formData.no_days;

    this.doctorService.insertDiagnosisformedicine(this.diagnosisMedicineData).subscribe(
      result => {
        console.log("Medicine added:", result); // Debugging statement to check the response
        this.resetForm(form);
        this.router.navigate(['doctor/medicine-list']); // Navigate to the medicine list page or wherever appropriate
      }
    );
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.addMedicine(form);
  }
}
  


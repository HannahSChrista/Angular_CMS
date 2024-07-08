import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bookappointment } from '../models/bookappointment';
import { Patientdetails } from '../models/patientdetails';
import { DiagnosisMedicine } from '../models/diagnosis-medicine';
import { Medicine } from '../models/medicine';
import { NewTest } from '../models/new-test';
import { DiagnosisLabTest } from '../models/diagnosis-lab-test';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctor :Doctor[]=[];
  medicine : DiagnosisMedicine[]=[];
  test : DiagnosisLabTest[]=[];
  medicinelist : Medicine[]=[];
  bookappointment : Bookappointment[]=[];
  formEmployeeData :  Bookappointment= new Bookappointment();

  formDiagnosisData : Doctor = new Doctor();
  formMedicinelistData : Doctor = new Doctor();
  formMedicineData: any = {
    id: '',
    medicineid: '',
    dosage: '',
    no_days: ''
  };
  
  formTestData : DiagnosisLabTest = new DiagnosisLabTest();

  constructor(private httpClient:HttpClient) {
    // this.formEmployeeData.patient = new Patientdetails();
   }

  bindListEmployees():void{
    this.httpClient.get<Doctor[]>
    (environment.apiUrl + "/diagnosislist")
    .subscribe(response=>this.doctor=response)
    }
    insertDiagnosis(a:any):Observable<any>{
      console.log(a)
      return this.httpClient.post(environment.apiUrl + "/diagnosislist",a)
    }



    insertDiagnosisformedicine(a:any):Observable<any>{
      console.log(a)
      return this.httpClient.post(environment.apiUrl + "/diagnosismedicine",a.id,a)
    }



    bindListappointment():void{
      this.httpClient.get<Bookappointment[]>
      (environment.apiUrl + "/appointment")
      .subscribe(response=>this.bookappointment=response)
      }
      // insertDiagnosis(doctor:Doctor):Observable<any>{
      //   console.log(doctor)
      //   return this.httpClient.post(environment.apiUrl + "/diagnosislist",doctor)
      // }

      insertMedicine(medicine:DiagnosisMedicine):Observable<any>{
        console.log(medicine)
        return this.httpClient.post(environment.apiUrl + "/diagnosismedicine",medicine)
      }

      getAllMedicine(): Observable<Medicine[]> {
        return this.httpClient.get<Medicine[]>(`${environment.apiUrl}/medicinelist`);
      }
      
      insertTest(test:DiagnosisLabTest):Observable<any>{
        console.log(test)
        return this.httpClient.post(environment.apiUrl + "/diagnosistest",test)
      }

      
     // Method to set formEmployeeData
  setFormEmployeeData(data: Bookappointment): void {
    this.formEmployeeData = data;
  }
   // Method to get formEmployeeData
   getFormEmployeeData(): Bookappointment {
    return this.formEmployeeData;
  }
  setFormMedicinelistData(data: Doctor): void {
    this.formMedicinelistData = data;
  }

  getFormMedicinelistData(): Doctor {
    return this.formMedicinelistData;
  }
}

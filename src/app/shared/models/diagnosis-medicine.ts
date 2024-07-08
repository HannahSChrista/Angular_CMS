import { Medicine } from "./medicine";
import { Patientdetails } from "./patientdetails";

export class DiagnosisMedicine {
    id:number = 0;
    patientid:number =0;
    patientdetails:Patientdetails=new Patientdetails;
    medicineid:number=0;
    medicinedetails:Medicine = new Medicine;
    dosage:string ='';
    no_days:number =0;
}

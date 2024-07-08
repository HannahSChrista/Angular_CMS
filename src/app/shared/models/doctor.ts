import { Bookappointment } from "./bookappointment";

export class Doctor {
    id:number = 0;
    medical_history:string = '';
    symptoms:string ='';
    diagnosis:string = '';
    doctor_note :string ='';
    next_visit : Date = new Date;
    patient_id : number =0;
    patientdetails:Bookappointment=new Bookappointment;
}

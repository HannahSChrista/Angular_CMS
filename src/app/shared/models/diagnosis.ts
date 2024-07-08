import { Bookappointment } from "./bookappointment";
import { Patientdetails } from "./patientdetails";

export class Diagnosis {
    medical_history : string = '';
    symptoms : string = '';
    diagnosis : string = '';
    doctor_note : string='';
    next_visit : Date = new Date;
    patientdetails:Bookappointment = new Bookappointment;
}

import { Patientdetails } from "./patientdetails";
import { User } from "./user";

export class Bookappointment {
    id:number=0;
    appointment_date : Date = new Date;
    time_slot :string = '';
    status :string ='';
    patient:Patientdetails=new Patientdetails
    user:User=new User
}

import { NewTest } from "./new-test";
import { Patientdetails } from "./patientdetails";

export class DiagnosisLabTest {
    id:number=0;
    patientid:number=0;
    patientdetails:Patientdetails = new Patientdetails;
    labid:number=0;
    labdetails:NewTest=new NewTest;
}

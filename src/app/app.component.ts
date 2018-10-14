import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Patient} from './patient';
import {Name} from './name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patient';

  p = 'Test';
  patient: Patient = {id:"",birthDate:"",gender:"",firstname:"", surname:"", name:[]};

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Patient>('http://hapi.fhir.org/baseDstu3/Patient/22782/_history/26?_pretty=true').subscribe(
      (patient) => {
        this.patient.id = patient.id;
        this.patient.birthDate = patient.birthDate;
        this.patient.gender = patient.gender;
        this.patient.surname = patient.name[0].family
        console.log(patient);
      }
  }
}

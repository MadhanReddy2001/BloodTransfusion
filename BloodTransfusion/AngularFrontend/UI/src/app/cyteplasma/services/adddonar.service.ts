import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdddonarService {

  newdonorinformation = {
    donorinformation: {
      address1: "",
      bloodgroup: "",
      city: "",
      country: "",
      donorname: "",
      mobileno: "",
      pincode: "",
      state: "",
      town: ""
    },
    healthinformation:{
      anemia: "",
      alcohol: "",
      bp: "",
      diabetic: "",
      hiv: "",
      medicaltreatment: "",
      previousdonation: "",
      weight: "",
    }
  }
  constructor(private http:HttpClient) { }

   pincodes():Observable<any>{

    return this.http.get('/assets/data.json')
  }
}

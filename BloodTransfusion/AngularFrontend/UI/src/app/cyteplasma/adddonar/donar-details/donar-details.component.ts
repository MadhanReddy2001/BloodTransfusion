import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdddonarService } from '../../services/adddonar.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface AutoCompleteSelectEvent{
  originalEvent: Event;
  pincode: any;
}

interface InputNumberInputEvent{
  originalEvent: Event;
  value: any;
  formattedValue: any;
}

interface NgModelChangeEvent{
  originalEvent: Event;
  pincode: any
}

@Component({
  selector: 'app-donar-details',
  templateUrl: './donar-details.component.html',
  styleUrls: ['./donar-details.component.scss']
})
export class donarDetailsComponent{

  donorinformation: any;

  submitted: boolean = false;

  pincode: any[] =[];

  filteredpincode : any[]=[];

  country: any[] | undefined;

  filteredcountry: any[]= [];

constructor(private router:Router,private adddonorser:AdddonarService){}

ngOnInit(){
  this.adddonorser.pincodes().subscribe(
    data =>{
     this.pincode = data;
    });

    this.donorinformation = this.adddonorser.newdonorinformation.donorinformation;
}

filterpincodes(event: AutoCompleteCompleteEvent){

  let filtered: any[]= [];
  let query = event.query;

  for(let i = 0; i < (this.pincode as any[]).length; i++){
    let pincode = (this.pincode as any[])[i];

    if(pincode.pincode.indexOf(query.toLowerCase()) == 0){
      filtered.push(pincode);
    }
  }
  this.filteredpincode = filtered;
}

filtercountry(event: AutoCompleteCompleteEvent){

  let filtered: any[]=[];
  let query = event.query;

  for(let i = 0; i <(this.country as any[]).length; i++){
    let country = (this.country as any[])[i];

    if(country.country.toLowerCase().indexOf(query.toLowerCase()) == 0){
      filtered.push(country);
    }
  }
  this.filteredcountry = filtered;
}

onselectpincode(event: AutoCompleteSelectEvent){
  const selectedPincode = event.pincode;
    if (!this.pincode.includes(selectedPincode)) {
      this.donorinformation.pincode = selectedPincode;
    }
}

ngmodelchange(event:NgModelChangeEvent){
let pincode;
  const enteredpincode = event;
  if(!this.pincode.includes(enteredpincode)){
  this.donorinformation.pincode= {pincode:enteredpincode}
  }
}

nextPage(){
  if(this.donorinformation.donorname && this.donorinformation.bloodgroup && this.donorinformation.address1 && this.donorinformation.mobileno && this.donorinformation.mobileno){
    this.router.navigate(['donate/healthdetails']);
  }
this.submitted = true;
}

}

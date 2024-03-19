import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdddonarService } from '../../services/adddonar.service';

interface yesno{
  value: string;
}
@Component({
  selector: 'app-health-details',
  templateUrl: './health-details.component.html',
  styleUrls: ['./health-details.component.scss']
})
export class HealthDetailsComponent implements OnInit{

  formGroup: FormGroup | undefined;

  options: yesno[] | undefined;

  selectedOption: yesno | undefined;

  healthinformation: any;

  constructor(private router:Router,private adddonarser: AdddonarService){}

  ngOnInit() {

    this.options =[
      {value: 'Yes'},
      {value: 'No'}
    ]

    this.healthinformation = this.adddonarser.newdonorinformation.healthinformation
}

  prevPage(){
    this.router.navigate(['donate/donardetails']);
  }

  nextPage(){
    this.router.navigate(['donate/confirmation']);
  }
}

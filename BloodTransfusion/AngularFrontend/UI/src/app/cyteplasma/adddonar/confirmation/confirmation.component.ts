import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdddonarService } from '../../services/adddonar.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  confirminformation: any;

  constructor(private router:Router,private adddonarser:AdddonarService){}

  ngOnInit(){
    this.confirminformation = this.adddonarser.newdonorinformation
  }

  prevPage(){
    this.router.navigate(['donate/healthdetails'])
  }

  complete(){

  }
}

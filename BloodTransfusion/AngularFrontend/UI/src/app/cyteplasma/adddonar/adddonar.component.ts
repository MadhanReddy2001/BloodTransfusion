import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-adddonar',
  templateUrl: './adddonar.component.html',
  styleUrls: ['./adddonar.component.scss']
})
export class AdddonarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit(){

    this.items = [
      {
        label : 'Donor',
        routerLink : 'donardetails'
      },
      {
        label:'Health',
        routerLink:'healthdetails'
      },
      {
        label:'Confirmation',
        routerLink:'confirmation'
      }
    ]
  }
}

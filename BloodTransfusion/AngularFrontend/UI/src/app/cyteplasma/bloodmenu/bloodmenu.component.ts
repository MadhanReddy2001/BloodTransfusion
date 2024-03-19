import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bloodmenu',
  templateUrl: './bloodmenu.component.html',
  styleUrls: ['./bloodmenu.component.scss']
})
export class BloodmenuComponent implements OnInit{
menuItems : any[] = [];


isdonate : boolean | undefined;

ngOnInit(){
this.menuItems = [
  {
    label : 'Blood',
    items:[
      {
        label : 'Donate',
        routerLink : 'donate',
        icon : '',
        command:()=>{
          
        }
      }
    ]
  }
   
]
}
}

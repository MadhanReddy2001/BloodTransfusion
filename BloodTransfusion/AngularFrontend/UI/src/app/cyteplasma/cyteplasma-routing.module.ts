import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { ConfirmationComponent } from './adddonar/confirmation/confirmation.component';
import { donarDetailsComponent } from './adddonar/donar-details/donar-details.component';
import { HealthDetailsComponent } from './adddonar/health-details/health-details.component';
import { BloodmenuComponent } from './bloodmenu/bloodmenu.component';

const routes: Routes = [
  {path:'',component:BloodmenuComponent,
    children :[
      {path:'donate',component:AdddonarComponent,
        children:[
          {path:'donardetails',component:donarDetailsComponent},
          {path:'healthdetails',component:HealthDetailsComponent},
          {path:'confirmation',component:ConfirmationComponent},
          {path: '',redirectTo: 'donardetails',pathMatch: 'full' }
        ]
    }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyteplasmaRoutingModule { }

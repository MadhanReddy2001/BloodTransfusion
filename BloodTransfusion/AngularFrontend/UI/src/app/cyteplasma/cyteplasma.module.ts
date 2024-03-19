import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { ConfirmationComponent } from './adddonar/confirmation/confirmation.component';
import { donarDetailsComponent } from './adddonar/donar-details/donar-details.component';
import { HealthDetailsComponent } from './adddonar/health-details/health-details.component';
import { BloodmenuComponent } from './bloodmenu/bloodmenu.component';
import { CyteplasmaRoutingModule } from './cyteplasma-routing.module';

@NgModule({
  declarations: [
    BloodmenuComponent,
    AdddonarComponent,
    donarDetailsComponent,
    HealthDetailsComponent,
    ConfirmationComponent,

    
  ],
  imports: [
    CommonModule,
    CyteplasmaRoutingModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  
})
export class CyteplasmaModule { }

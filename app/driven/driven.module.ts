import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { DrivenComponent } from "./driven.component";
import { DrivenService } from "./driven.service";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule
  ],
  declarations: [    
    DrivenComponent
  ],
  providers: [DrivenService]
})
export class DrivenModule { }
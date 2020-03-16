import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { DrivenComponent } from "./driven.component";
import { DrivenService } from "./driven.service";
import { SharedModule } from '../shared/shared.module';
import { ConsultaCepService } from '../shared/servicos/consulta-cep.service';

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
  providers: [DrivenService, ConsultaCepService]
})
export class DrivenModule { }
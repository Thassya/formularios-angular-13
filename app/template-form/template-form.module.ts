import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';
import { ConsultaCepService } from "../shared/servicos/consulta-cep.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent
  ],
  providers: [ConsultaCepService]
})
export class TemplateFormModule { }
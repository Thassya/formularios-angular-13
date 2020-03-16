import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './servicos/dropdown.service';
import { ConsultaCepService } from './servicos/consulta-cep.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [DropdownService, ConsultaCepService]
})
export class SharedModule { }
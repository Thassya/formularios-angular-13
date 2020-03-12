import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(form) {
    console.log(form);

  }

  constructor() {}

  ngOnInit() {}
  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo), 
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
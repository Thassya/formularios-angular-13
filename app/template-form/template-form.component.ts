import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  
usuario: any = {
  nome: 'Thassya',
  email: 'teste@email.com'
}

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
      }

  constructor() {}

  ngOnInit() {}
}

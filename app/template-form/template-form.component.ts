import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) {}

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

  consultaCEP(cep){
    cep=cep.replace(/\D/g, '');
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
       if(validacep.test(cep)) { //
          this.http.get(`https://viacep.com.br/ws/${cep}/json/`).map(dados=>dados.json())
          .subscribe((dados)=>{console.log(dados)});
       }
    } 
  }
}

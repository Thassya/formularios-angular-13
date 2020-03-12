import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

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

//https://resttesttest.com/
  onSubmit(form) {
    console.log(form);
    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
    .map(res=>res)
    .subscribe(dados => console.log(dados));
  }

  constructor(private http: Http) {}

  ngOnInit() {}
  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo) {
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        
        this.limpaFormulario(form);

        this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => {
            this.populaDadosForm(dados, form);
          },
          form.form.reset()
          );
      }
    }
  }
  populaDadosForm(dados, formulario) {

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  limpaFormulario(formulario){
      formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
  

}

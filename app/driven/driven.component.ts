import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: "app-driven",
  templateUrl: "./driven.component.html",
  styleUrls: ["./driven.component.css"]
})
export class DrivenComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: Http) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [
        "Thassya",
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(
        dados => {
          console.log(dados);
          //reseta form
          this.resetar();
        },
        (error: any) => alert("erro")
      );
  }
  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid && this.formulario.get(campo).touched
    );
  }
  verificaEmailInvalido() {
    let campoEmail = this.formulario.get("email");
    if (campoEmail.errors) {
      return campoEmail.errors["email"] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo)
    };
  }
  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;    
    cep = cep.replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        
        this.limpaFormulario();

        this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => {
            console.log(dados);          
            this.populaDadosForm(dados);
          }           
          );
      }
    }
  }
   limpaFormulario(){
      this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
  populaDadosForm(dados) {
    this.formulario.patchValue({
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
}

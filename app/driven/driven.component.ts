import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Http } from "@angular/http";
import { DropdownService } from "../shared/servicos/dropdown.service";
import { ConsultaCepService } from "../shared/servicos/consulta-cep.service";
import { EstadoBr } from "../shared/models/estado-br.model";

@Component({
  selector: "app-driven",
  templateUrl: "./driven.component.html",
  styleUrls: ["./driven.component.css"]
})
export class DrivenComponent implements OnInit {
  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit() {
    // this.dropdownService.getEstadosBr().subscribe(dados => {
    //   this.estados = dados;
    //   console.log(dados);
    // });

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
    if (this.formulario.valid) {
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
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid && this.formulario.get(campo).dirty
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
     let cep = this.formulario.get("endereco.cep").value;
     if (cep != null && cep !== "") {
      this.cepService.consultaCEP(cep).subscribe(dados => {
        this.populaDadosForm(dados);
        this.formulario.get('nome').setValue('Igor');
      });
    }
  }

  
  populaDadosForm(dados) {
     console.log(dados);

    this.formulario.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaFormulario() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}

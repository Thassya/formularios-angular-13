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

  verificaValidTouched(campo) {
    return (
      !this.formulario.get(campo).valid && this.formulario.get(campo).touched
    );
  }
  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo) {
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo)
    };
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [
        "Thassya",
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      email: [null, [Validators.required, Validators.email]]
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
}

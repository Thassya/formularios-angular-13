import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Http } from '@angular/http';

@Component({
  selector: "app-driven",
  templateUrl: "./driven.component.html",
  styleUrls: ["./driven.component.css"]
})
export class DrivenComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["Thassya"],
      email: [null]
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .map(res=>res).subscribe(dados => console.log(dados));
  }
}

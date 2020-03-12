import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) {

  }
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:['Thassya'],
      email:[null],
    })
  }
}

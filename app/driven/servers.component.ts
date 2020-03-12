import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
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

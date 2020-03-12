import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  
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

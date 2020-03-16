import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { of } from 'rxjs';

@Injectable()
export class ConsultaCepService {

  constructor(private http: Http) { }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
       
       return this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`);
      }
    }

    return of({})
  }

}
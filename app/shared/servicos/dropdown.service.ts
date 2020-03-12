import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class DropdownService {
  constructor(private http: Http) {}
  getEstadosBr() {
    return this.http.get('estadosbr.json').map((res: Response)=> res.json());
  }
}

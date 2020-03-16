import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class DropdownService {
  constructor(private http: Http) {}

  getEstadosBr() {
    return this.http
      .get("estadosbr.json")
      .map((res: Response) => this.extractData(res));
  }
  
  private extractData(res: Response) {
  let body = res.json();
  // return just the response, or an empty array if there's no data
  return body || []; 
}
}

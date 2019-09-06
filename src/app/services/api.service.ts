import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  emailData: any;

  constructor(private http: HttpClient) {}

  getEmailData(): Observable<any> {
    return this.http.get(`localhost:8000/tests`);
  }
}

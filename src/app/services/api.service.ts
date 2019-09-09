import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  emailData: any;
  clientId =
    "957652737013-ou5e4trj3d9qse8j3uo3rkmjuvfcncn4.apps.googleusercontent.com";
  apiKey = "AIzaSyBiuOdxGOR2fiSykWK6y-TtuQWwT4zXeNg";
  scopes = "https://www.googleapis.com/auth/gmail.readonly";
  request: any;
  gmail: any;

  constructor(private http: HttpClient) {}
}

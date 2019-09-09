import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.css"]
})
export class MainViewComponent implements OnInit {
  emailData: any;
  clientID;
  apiKey;
  scopes;
  gmail;
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}

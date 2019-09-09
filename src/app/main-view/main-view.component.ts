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

  checkAuth() {
    this.apiService.checkAuth();
  }
  handleAuthClick() {
    this.apiService.handleAuthClick();
  }
  handleAuthResult(authResult) {
    this.apiService.handleAuthResult(authResult);
  }
  loadGmailApi() {
    this.apiService.loadGmailApi();
  }
  displayInbox() {
    this.apiService.displayInbox();
  }
  handleClientLoad() {
    this.apiService.handleClientLoad();
  }

  ngOnInit() {
    //   gapi.client.setApiKey(this.apiKey);
    //   window.setTimeout(this.checkAuth, 1);
    // }
  }
}

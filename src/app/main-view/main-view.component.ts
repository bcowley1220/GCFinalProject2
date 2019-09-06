import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.css"]
})
export class MainViewComponent implements OnInit {
  emailData: any;
  constructor(private apiService: ApiService) {}

  getEmail(): void {
    this.apiService.getEmailData().subscribe(response => {
      this.emailData = response.data;
      console.log(this.emailData);
    });
  }
  ngOnInit() {}
}

// import { Component, OnInit } from "@angular/core";
// import { ApiService } from "../services/api.service";
// @Component({
//   selector: "app-main",
//   templateUrl: "./main.component.html",
//   styleUrls: ["./main.component.css"]
// })
// export class MainComponent implements OnInit {
//   emailData: any;
//   constructor(private apiService: ApiService) {}

//   getEmail(): void {
//     this.apiService.getEmailData().subscribe(response => {
//       this.emailData = response.data;
//       console.log(this.emailData);
//     });
//   }
//   ngOnInit() {}
// }

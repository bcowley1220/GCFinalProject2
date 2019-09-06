import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";
import { ApiService } from "./services/api.service";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./main-view/main-view.component";

@NgModule({
  declarations: [AppComponent, MainViewComponent],
  imports: [BrowserModule, HttpClientModule, OAuthModule.forRoot()],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

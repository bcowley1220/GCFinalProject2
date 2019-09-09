import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  emailData: any;
  clientId =
    "588834174547-0av6tvls5jhfaguu99k39bh8844t74tg.apps.googleusercontent.com";
  apiKey = "AIzaSyBvB7nqso0cc-sd2sWmXXGrlsbRsNAt1MI";
  scopes = "https://www.googleapis.com/auth/gmail.readonly";
  request: any;
  gmail: any;

  constructor(private http: HttpClient) {}

  // !Gmail API OAuth2 & Call Section
  handleClientLoad() {
    gapi.client.setApiKey(this.apiKey);
    window.setTimeout(this.checkAuth, 1);
  }

  checkAuth() {
    gapi.auth.authorize(
      {
        client_id: this.clientId,
        scope: this.scopes,
        immediate: true
      },
      this.handleAuthResult
    );
  }

  handleAuthClick() {
    gapi.auth.authorize(
      {
        client_id: this.clientId,
        scope: this.scopes,
        immediate: false //when this is all up and working, we can possibly switch to true, but false will cause it to auto prompt every reload
      },
      this.handleAuthResult
    );
    return false;
  }

  // !This method needs to be rewritten out of jquery for TS
  handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      this.loadGmailApi();
      $("#authorize-button").remove();
      $(".table-inbox").removeClass("hidden");
    } else {
      $("#authorize-button").removeClass("hidden");
      // $("#authorize-button").on("click", function() {
      //   this.handleAuthClick();
      // });
    }
  }

  loadGmailApi() {
    gapi.client.load("gmail", "v1", this.displayInbox);
  }

  displayInbox() {
    this.request = gapi.client.gmail.users.messages.list({
      userId: "me",
      labelIds: "INBOX",
      maxResults: 10
    });
  }

  // !This function needs to be addressed! It works in vanilla, but too tired to figure out in TS class
  //   request.execute( (response) => {
  //     $.each(response.messages, () => {
  //      let messageRequest = gapi.client.gmail.users.messages.get({
  //        userId: "me",
  //        id: this.id
  //      });
  //      messageRequest.execute(this.appendMessageRow)

  // })});

  // getHeader(headers, index) {
  //   let header = "";
  //   $.each(this.headers, function() {
  //     if (this.name === index) {
  //       header = this.value;
  //     }
  //   });
  //   return header;
  // };
  // getBody(message) {
  //   let encodedBody = "";
  //   if (typeof message.parts === "undefined") {
  //     encodedBody = message.body.data;
  //   } else {
  //     encodedBody = this.getHTMLPart(message.parts);
  //   }
  //   encodedBody = encodedBody
  //     .replace(/-/g, "+")
  //     .replace(/_/g, "/")
  //     .replace(/\s/g, "");
  //   return decodeURIComponent(escape(window.atob(encodedBody)));
  // }

  // getHTMLPart(arr ) {
  //   for (var x = 0; x <= arr.length; x++) {
  //     if (typeof arr[x].parts === "undefined") {
  //       if (arr[x].mimeType === "text/html") {
  //         return arr[x].body.data;
  //       }
  //     } else {
  //       return this.getHTMLPart(arr[x].parts);
  //     }
  //   }
  //   return "";
  // }
}

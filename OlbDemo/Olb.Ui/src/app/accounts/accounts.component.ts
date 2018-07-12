import { Component } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

@Component({  
  templateUrl: './accounts.component.html'
})
export class AccountsComponent {
  accountsForAsp: Array<string> = [];
  accountsForNode: Array<string> = [];
  sessionResponse:string;
  isErrorForAsp: boolean;
  isErrorForNode: boolean;
  isErrorForSession: boolean;
  apiRoundTripTimeForAsp: number;
  apiRoundTripTimeForNode: number;
  apiRoundTripTimeForSession: number;
  endpointUrl:string;

  constructor(private http: Http) {
    this.endpointUrl = 'https://9z40o4b8r5.execute-api.us-east-1.amazonaws.com/Dev1/api';
  }
  getAllAccountsForAsp() {
    let currentTime = Date.now();

    this.http.get(this.endpointUrl+"/accounts").subscribe((data) => {
      this.apiRoundTripTimeForAsp = Date.now() - currentTime;
      this.accountsForAsp = data.json();
    },
      (error) => {
        this.isErrorForAsp = true;
    })
  }
  getAllAccountsForNode() {
    let currentTime = Date.now();
    
    this.http.get(this.endpointUrl+"/olbapinode").subscribe((data) => {
      this.apiRoundTripTimeForNode = Date.now() - currentTime;
      this.accountsForNode = data.json();
    },
      (error) => {
        this.isErrorForNode = true;
      })
  }

  createSession() {
   // let reqOptions: RequestOptionsArgs = new RequestOptionsArgs();
    let currentTime = Date.now();
    this.http.get(this.endpointUrl+"/session", { withCredentials:true }).subscribe((data) => {
      this.apiRoundTripTimeForSession = Date.now() - currentTime;
      this.sessionResponse = data['_body'] + " Total time taken in ms: " + this.apiRoundTripTimeForSession;
    },
      (error) => {
        this.isErrorForSession = true;
      })
  }
}

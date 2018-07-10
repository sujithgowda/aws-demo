import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({  
  templateUrl: './accounts.component.html'
})
export class AccountsComponent {
  accountsForAsp: Array<string> = [];
  accountsForNode: Array<string> = [];
  isErrorForAsp: boolean;
  isErrorForNode: boolean;
  apiRoundTripTimeForAsp: number;
  apiRoundTripTimeForNode: number;
  constructor(private http: Http) {

  }
  getAllAccountsForAsp() {
    let currentTime = Date.now();
   
    this.http.get("https://9z40o4b8r5.execute-api.us-east-1.amazonaws.com/Dev1/api/accounts").subscribe((data) => {
      this.apiRoundTripTimeForAsp = Date.now() - currentTime;
      this.accountsForAsp = data.json();
    },
      (error) => {
        this.isErrorForAsp = true;
    })
  }
  getAllAccountsForNode() {
    let currentTime = Date.now();
    
    this.http.get("https://vj6wkg5nx8.execute-api.us-east-1.amazonaws.com/Dev1/olbapinode").subscribe((data) => {
      this.apiRoundTripTimeForNode = Date.now() - currentTime;
      this.accountsForNode = data.json();
    },
      (error) => {
        this.isErrorForNode = true;
      })
  }
}

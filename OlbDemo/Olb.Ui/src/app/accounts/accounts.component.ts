import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({  
  templateUrl: './accounts.component.html'
})
export class AccountsComponent {
  accounts: Array<string> = [];
  isError: boolean;
  constructor(private http: Http) {

  }
  getAllAccounts() {
    this.http.get("https://9z40o4b8r5.execute-api.us-east-1.amazonaws.com/Dev1/api/accounts").subscribe((data) => {
      console.log(data.json());
      this.accounts = data.json();
    },
      (error) => {
        this.isError = true;
    })
  }
}

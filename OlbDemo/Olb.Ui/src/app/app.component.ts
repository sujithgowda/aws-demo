import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) {

  }
  getAllAccounts() {
    this.http.get("https://9z40o4b8r5.execute-api.us-east-1.amazonaws.com/Dev1/api/accounts").subscribe((data) => {
      console.log(data);
    })
  }
}

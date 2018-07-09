import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';

@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class AccountsModule { }

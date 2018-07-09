import { Routes, RouterModule} from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  
  
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
   { path: '', component: LoginFormComponent },
  //  { path: 'recipe/:id', component: DetailListComponent},
  //  { path: 'ingredients', component:  DetailListComponent},
   { path: '**', redirectTo: '' }
];
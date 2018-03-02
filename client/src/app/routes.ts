import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'user/home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit/:id', component: EditUserComponent },

  
];
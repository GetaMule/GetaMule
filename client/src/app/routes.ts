import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MytravelsComponent } from './mytravels/mytravels.component';
import { NewtravelComponent } from './newtravel/newtravel.component';
import { OrdersComponent } from './orders/orders.component';
import { SecretComponent } from './secret/secret.component';


export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'user/home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit/:id', component: EditUserComponent },
  { path: 'mytravels', component: MytravelsComponent },
  { path: 'mytravels/new/:id', component: NewtravelComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'secret', component: SecretComponent },



];
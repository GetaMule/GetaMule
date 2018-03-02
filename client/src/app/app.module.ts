import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { SubmitProdService } from '../services/submit-prod.service';
import { EditUserService } from '../services/edit-user.service';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    ProfileComponent,
    MapComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule
  ],
  providers: [SessionService, SubmitProdService,
    EditUserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
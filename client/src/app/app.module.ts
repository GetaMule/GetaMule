import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
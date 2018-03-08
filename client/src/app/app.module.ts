import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { CountriesPipesModule, GeneralPipesModule } from 'ng2-pipe';
//COMPONENTS
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MytravelsComponent } from './mytravels/mytravels.component';
import { NewtravelComponent } from './newtravel/newtravel.component';
import { OrdersComponent } from './orders/orders.component';
//SERVICES  
import { SessionService } from '../services/session.service';
import { SubmitProdService } from '../services/submit-prod.service';
import { EditUserService } from '../services/edit-user.service';

import { routes } from './routes';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatNativeDateModule } from '@angular/material';
import { OrderByPipe } from './pipes/orderby.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SecretComponent } from './secret/secret.component';
//import { FileSelectDirective } from "ng2-file-upload";
//import { NeworderComponent } from './neworder/neworder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    ProfileComponent,
    EditUserComponent,
    MytravelsComponent,
    NewtravelComponent,
    OrderByPipe,
    OrdersComponent,
    OrdersComponent,
    SecretComponent,
    //FileSelectDirective

    //NeworderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
    // CountriesPipesModule,
    // GeneralPipesModule

  ],
  providers: [SessionService, SubmitProdService,
    EditUserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
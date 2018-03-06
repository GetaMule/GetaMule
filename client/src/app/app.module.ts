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
import { EditUserComponent } from './edit-user/edit-user.component';
import { MytravelsComponent } from './mytravels/mytravels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatNativeDateModule } from '@angular/material';
import { NewtravelComponent } from './newtravel/newtravel.component';
import { OrderByPipe } from './pipes/orderby.pipe';
import { OrdersComponent } from './orders/orders.component';
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

  ],
  providers: [SessionService, SubmitProdService,
    EditUserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import {UsersService} from './services/users.service';




const appRoutes: Routes = [
  {path: '' , component:
  DashboardComponent,
    canActivate: [AuthGuard]
  },
  {path: 'login' , component:
  LoginComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
      ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

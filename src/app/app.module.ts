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
import {ChatComponent} from './components/chat/chat.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatIconModule } from '@angular/material';



const appRoutes: Routes = [
  {path: '' , component:
  DashboardComponent,
    canActivate: [AuthGuard]
  },
  {path: 'login' , component:
  LoginComponent
  },
  {path: 'chat' , component:
  ChatComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ChatComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
      ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

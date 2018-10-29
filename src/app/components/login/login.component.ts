import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {UsersService} from '../../services/users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: '/';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private users: UsersService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      usergroup: ['', Validators.required]
    });
    this.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.loginForm.controls; }


  login(username: string, usergroup: string) {
    localStorage.setItem('currentUser', JSON.stringify(username));
    this.router.navigate([this.returnUrl]);
    console.log(username);
    return username;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  onSubmit() {
    console.log('form submit clicked..');
    this.submitted = true;
    console.log('form clicked..');
    console.log('Roman');
    console.log(this.users.getUsers());
    console.log(this.users.getUsers());
    console.log('Roman');
    // stop here if form is invalid

    this.loading = true;
    this.login(this.f.username.value, this.f.usergroup.value);

  }
}

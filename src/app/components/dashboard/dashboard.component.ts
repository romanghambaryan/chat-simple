import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UsersService} from '../../services/users.service';


const currentuser = localStorage.getItem('currentUser');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private users: UsersService,
              ) {
  }
  ngOnInit() {
    console.log('Roman');
    console.log(this.users.getUsers());
    console.log(this.users.getUsers());
    console.log('Roman');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}

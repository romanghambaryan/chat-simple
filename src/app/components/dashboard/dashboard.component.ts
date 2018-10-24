import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


angular.module('demo', [])
  .controller('Hello', function($scope, $http) {
    $http.get('f4HYBYdeqTZ7KNb').
    then(function(response) {
      $scope.greeting = response.data;
    });
  });

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private route: ActivatedRoute,
              private router: Router,
              ) {
  }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() { }

  login(username: string, password: string) {
          localStorage.setItem('currentUser', JSON.stringify(username));
          return username;
      }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

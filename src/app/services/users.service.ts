import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as QB from './../../quickblox.min';

const appConfig = {
  dilogsPerRequers: 15,
  messagesPerRequest: 50,
  usersPerRequest: 15,
  typingTimeout: 3 // 3 seconds
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
    QB.init('72448', 'f4HYBYdeqTZ7KNb', 'ZC7dK39bOjVc-Z8', appConfig);
    console.log(QB.user);


    QB.createSession({login: 222, password: 2222}, function(err, res) {
      if (res) {
        QB.chat.connect({userId: 222, password: 2222}, function(err, roster) {
          if (err) {
            console.log(err);
          } else {
          }
        });
      }else{
        console.log(err);
      }
    });

  }

  getUsers() {
    this.http.get('https://api.nytimes.com/svc/books/v3/lists.json').subscribe((res) => {
      console.log(res);
      console.log(QB);
    });
  }
}



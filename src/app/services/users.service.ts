import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class UsersService{

  constructor(private http: HttpClient) {


  }

  getData(){

    return this.http.get("")
      .subscribe(data => {
        console.log(data)
      })
  }





}

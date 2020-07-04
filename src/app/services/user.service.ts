import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://reqres.in/api"

  constructor(private http: HttpClient) { }

  getUsers(page: number){
    return this.http.get<any>(this.baseUrl+'/users?page='+page)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getUserById(id: number){
    return this.http.get<any>(this.baseUrl+'/users/'+id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  saveUser(_name: string, _job: string){
    var data = {
      name: _name,
      job: _job
    }
    return this.http.post<any>(this.baseUrl+'/users',data)
      .pipe(
        catchError(this.errorHandl)
      );

  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

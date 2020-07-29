import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public loginUserFromeRemote(user: User): Observable<any>{
    return this.http.post<any>(this.url + 'login', user);
  }

  public registerUser(user: User): Observable<any>{
    return this.http.post<any>(this.url + 'register', user);
  }
}

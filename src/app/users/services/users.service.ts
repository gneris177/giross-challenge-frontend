import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../users'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>('https://d104-45-167-217-37.sa.ngrok.io/users', {
      headers: { 'ngrok-skip-browser-warning': 'ok' },
    })
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(
      'https://d104-45-167-217-37.sa.ngrok.io/users/' + id,
      {
        headers: { 'ngrok-skip-browser-warning': 'ok' },
      },
    )
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      'https://d104-45-167-217-37.sa.ngrok.io/users',
      user,
    )
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(
      'https://d104-45-167-217-37.sa.ngrok.io/users/' + id,
      user,
    )
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(
      'https://d104-45-167-217-37.sa.ngrok.io/users/' + id,
    )
  }
}

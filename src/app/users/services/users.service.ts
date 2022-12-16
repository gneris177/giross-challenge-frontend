import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../users'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://d104-45-167-217-37.sa.ngrok.io'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, {
      headers: { 'ngrok-skip-browser-warning': 'ok' },
    })
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, {
      headers: { 'ngrok-skip-browser-warning': 'ok' },
    })
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user)
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/users/${id}`, user)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`)
  }
}

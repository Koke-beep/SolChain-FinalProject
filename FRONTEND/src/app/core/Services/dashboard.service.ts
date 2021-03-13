/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Coin } from '../models/coin'
// import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  url = 'http://localhost:5000/';

  constructor (private http:HttpClient) { }

  // getUser (userId): Observable<User> {
  //   return this.http.get<User>(`${this.url}/user/${userId}`)
  // }

  getBestCoins (): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.url)
  }

  deleteCoinById (coinId): Observable<Coin[]> {
    return this.http.delete<Coin[]>(`${this.url}/coin/${coinId}`)
  }
}

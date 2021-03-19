/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { Coin } from '../models/coin'
import { CoinDataLink } from '../models/coinDataLink'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  url = 'http://localhost:5000';
  login = new BehaviorSubject(false);
  user = new BehaviorSubject(null)

  constructor (private http:HttpClient) { }

  getBestCoins (): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.url)
  }

  deleteCoinById (coinId): Observable<Coin[]> {
    return this.http.delete<Coin[]>(`${this.url}/coin/${coinId}`)
  }

  getCoinById (coinId): Observable<CoinDataLink> {
    return this.http.get<CoinDataLink>(`${this.url}/detail/${coinId}`)
  }

  postUser (data):Observable<User> {
    return this.http.post<User>(`${this.url}/auth/login`, data)
  }

  popupLogin () {
    this.login.next(!this.login.getValue())
  }

  deleteCoinFromList (coinId, userId) {
    return this.http.put<User>(`${this.url}/user/${userId}`, coinId)
  }
}

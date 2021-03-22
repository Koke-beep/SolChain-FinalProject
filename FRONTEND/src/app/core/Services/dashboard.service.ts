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

  getCoinById (coinId): Observable<CoinDataLink> {
    return this.http.get<CoinDataLink>(`${this.url}/detail/${coinId}`)
  }

  postUser (data):Observable<User> {
    return this.http.post<User>(`${this.url}/auth/login`, data)
  }

  popupLogin () :void {
    this.login.next(!this.login.getValue())
  }

  deleteCoinFromList (userId:string, coinId:number) {
    return this.http.put<User>(`${this.url}/user/${userId}`, { idCoin: coinId }).subscribe(data => {
      this.user.next(data)
    }, error => {
      console.log(`Update list coins user error: ${error}`)
    })
  }

  logout () {
    return this.http.get<any>(`${this.url}/logout`).subscribe()
  }

  sendMessage (payload) {
    return this.http.post<any>(`${this.url}/messageForm`, payload).subscribe(data => {
    })
  }
}

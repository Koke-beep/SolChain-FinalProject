/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Coin } from '../models/coin'
import { CoinDataLink } from '../models/coinDataLink'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  url = 'http://localhost:5000';

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
}

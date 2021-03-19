/* eslint-disable no-useless-constructor */
import { Component, HostListener, OnInit } from '@angular/core'
import { Coin } from 'src/app/core/models/coin'
import { DashboardService } from '../../../core/Services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  filterTerm: string;
  listCoins: Coin[] = [];
  coinFound: Coin[] | any;
  fadeFilter: string = null;
  filterList:string = 'filter__list'

  config:any
  login = this.topCoinDashboard.login
  user:any = this.topCoinDashboard.user;

  constructor (private topCoinDashboard: DashboardService) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listCoins.length
    }
  }

  @HostListener('click')
  clicked () {
    this.filterCoinByName(null)
    this.filterTerm = null
  }

  ngOnInit (): void {
    this.getTopCoins()
  }

  getTopCoins () {
    this.topCoinDashboard.getBestCoins().subscribe(data => {
      this.listCoins = data
    }, error => {
      console.log(error)
    })
  }

  filterCoinByName (name) {
    this.coinFound = !name ? [] : this.coinFound = this.listCoins.filter(coin => coin.name.toUpperCase().includes(name.toUpperCase()))
    this.coinFound = this.coinFound.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
  }

  addCoinToList (coin, owner) {
    let newCoin
    if (owner === 'user') {
      newCoin = this.user.list.find((element) => element.name.toUpperCase() === coin.name.toUpperCase())
      this.user.list = !newCoin ? [...this.user.list, coin] : this.user.list
      this.filterListClass(false)
    } else {
      newCoin = this.listCoins.find((element) => element.name.toUpperCase() === coin.name.toUpperCase())
      this.filterListClass(false)
    }
  }

  filterListClass (bool) {
    this.fadeFilter = bool ? null : 'filter__list-fade'
  }

  loadPage (event) {
    this.config.currentPage = event
  }

  deleteCoin (coinId, userId) {
    this.topCoinDashboard.deleteCoinFromList(coinId, userId)
  }
}

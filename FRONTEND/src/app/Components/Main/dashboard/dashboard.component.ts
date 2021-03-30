/* eslint-disable no-useless-constructor */
import { Component, HostListener, OnInit } from '@angular/core'
import { Coin } from 'src/app/core/models/coin'
import { DashboardService } from '../../../core/Services/dashboard.service'
import { ConfigPage } from '../../../core/models/config'
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

  config:ConfigPage

  login = this.topCoinDashboard.login
  user:any = this.topCoinDashboard.user;

  constructor (private topCoinDashboard: DashboardService) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listCoins.length
    }
  }

  ngOnInit (): void {
    this.getTopCoins()
  }

  @HostListener('click')
  clicked () {
    this.filterCoinByName(null)
    this.filterTerm = null
  }

  getTopCoins () :void {
    this.topCoinDashboard.getBestCoins().subscribe(data => {
      this.listCoins = data
    }, error => {
      console.log(error)
    })
  }

  filterCoinByName (name) :void {
    this.coinFound = !name ? [] : this.coinFound = this.listCoins.filter(coin => coin.name.toUpperCase().includes(name.toUpperCase()))
    this.coinFound = this.coinFound.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
  }

  addCoinToList (coin) :void {
    let newCoin = null

    newCoin = this.user._value.list.find((element) => element.name.toUpperCase() === coin.name.toUpperCase())
    this.user._value.list = !newCoin ? [...this.user._value.list, coin] : this.user._value.list
    this.filterListClass(false)
  }

  filterListClass (bool) :void {
    this.fadeFilter = bool ? null : 'filter__list-fade'
  }

  loadPage (event) :void {
    this.config.currentPage = event
  }

  deleteCoin (userId, coinId):void {
    this.topCoinDashboard.deleteCoinFromList(userId, coinId)
  }
}

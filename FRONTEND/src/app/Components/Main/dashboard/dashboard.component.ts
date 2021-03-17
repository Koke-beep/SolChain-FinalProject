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

  user = {
    logged: true,
    list: [
      {
        _id: '6048eaf468784e42d04c0fa3',
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        description: 'Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,650,081. The last known price of Bitcoin is 56,244.64392384 USD and is up 3.21 over the last 24 hours. It is currently trading on 9836 active market(s) with $51,142,651,520.24 traded over the last 24 hours. More information can be found at https://bitcoin.org/.',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        average: '17'
      },
      {
        _id: '6048eaf468784e42d04c0fa4',
        id: 2,
        name: 'Litecoin',
        symbol: 'LTC',
        description: 'Litecoin (LTC) is a cryptocurrency and operates on the Heco platform. Users are able to generate LTC through the process of mining. Litecoin has a current supply of 66,637,074.30816718. The last known price of Litecoin is 202.72570776 USD and is up 1.75 over the last 24 hours. It is currently trading on 761 active market(s) with $5,743,874,099.16 traded over the last 24 hours. More information can be found at https://litecoin.org/.',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
        average: '11'
      },
      {
        _id: '6048eb1721989010fcfa9e07',
        id: 3,
        name: 'Namecoin',
        symbol: 'NMC',
        description: 'Namecoin (NMC) is a cryptocurrency . Users are able to generate NMC through the process of mining. Namecoin has a current supply of 14,736,400. The last known price of Namecoin is 1.56955824 USD and is down -1.43 over the last 24 hours. It is currently trading on 8 active market(s) with $132,687.74 traded over the last 24 hours. More information can be found at https://www.namecoin.org/.',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3.png',
        average: '21'
      }
    ]
  };

  constructor (private topCoinDashboard: DashboardService) {
    this.config = {
      itemsPerPage: 5,
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
}

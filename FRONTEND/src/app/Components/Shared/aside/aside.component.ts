/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { DashboardService } from '../../../core/Services/dashboard.service'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent {
  user = this.userLogin.user

  constructor (private userLogin: DashboardService) {}

  showLogin () {
    this.userLogin.popupLogin()
  }
}
